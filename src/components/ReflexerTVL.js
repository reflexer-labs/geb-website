import React, { useCallback, useEffect } from "react"
import { Helmet } from "react-helmet"
import Numeral from "numeral"
import { isBrowser } from "../utils/helper"

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
  async function fetcher() {
    try {
      const web3 = new window.Web3("https://cloudflare-eth.com")
      const contract = await new web3.eth.Contract(minABI, contractAddress)
      const balance = await contract.methods.balanceOf(address).call()
      const ethPrice = await fetchEthPrice()
      const val = ((Number(balance) / 1e18) * ethPrice).toFixed(0)
      console.log("====================================")
      console.log(val)
      console.log("====================================")
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
      {/* Can use either react-helmet or include the script from gatsby-browser */}
      <Helmet>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"
        />
      </Helmet>
      {Numeral(TVL).format("0 a").split(" ")[0]}
    </span>
  )
}
