import React, { useCallback, useEffect } from "react"
import { Helmet } from "react-helmet"
import Numeral from "numeral"
import { isBrowser } from "../utils/helper"
import { NETWORK_URL } from "../utils/constants"

const contractAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
const address = "0x2D3cD7b81c93f188F3CB8aD87c8Acc73d6226e3A"
const minABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
]

const query = `{
  collateralType(id: "ETH-A") {
    totalCollateral
  }
}`

export default function ReflexerTVL() {
  const tvlFromLocalStorage = localStorage.getItem("tvl")
  const [TVL, setTVL] = React.useState(
    tvlFromLocalStorage ? tvlFromLocalStorage : "-"
  )

  async function fetchEthPrice() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
      )
      const { ethereum } = await res.json()
      return ethereum.usd
    } catch (error) {
      console.log(error)
    }
  }

  async function trySubgraph() {
    try {
      const res = await fetch(
        "https://subgraph.reflexer.finance/subgraphs/name/reflexer-labs/rai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      )

      const { data } = await res.json()
      return data.collateralType.totalCollateral
    } catch (error) {
      return false
    }
  }

  async function tryWeb3() {
    try {
      const web3 = new window.Web3(NETWORK_URL)
      const contract = await new web3.eth.Contract(minABI, contractAddress)
      const balance = await contract.methods.balanceOf(address).call()
      return balance
    } catch (error) {
      console.log("====================================")
      console.log("error with web3")
      console.log("====================================")
    }
  }

  async function fetchBalance() {
    const subResponse = await trySubgraph()
    if (subResponse && !isNaN(Number(subResponse))) {
      return Number(subResponse)
    }
    const balance = await tryWeb3()
    return Number(balance) / 1e18
  }

  async function fetcher() {
    try {
      const balance = await fetchBalance()
      const ethPrice = await fetchEthPrice()
      const val = (balance * ethPrice).toFixed(0)
      setTVL(val)
      if (isBrowser) {
        localStorage.setItem("tvl", val)
      }
    } catch (error) {
      console.log(error)
      if (isBrowser) {
        const value = localStorage.getItem("tvl")
        if (value) {
          setTVL(value)
        }
      }
    }
  }
  // eslint-disable-next-line
  const getTVL = useCallback(fetcher, [])

  useEffect(() => {
    if (isBrowser) {
      setTimeout(() => {
        getTVL()
      }, 1000)
    }
  }, [getTVL])

  return (
    <span>
      <Helmet>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"
        />
      </Helmet>
      {Number(TVL) > 0 ? Numeral(TVL).format("0 a").split(" ")[0] : "-"}
    </span>
  )
}
