import { utils as gebUtils } from "geb.js"
import { useCallback, useEffect, useMemo, useState } from "react"
import { formatNumber, formattedNum, getRatePercentage } from "../utils/helper"
import { statisticsQuery } from "../utils/query"
import useGeb from "./useGeb"
import _ from "../utils/lodash"

const yearlyExpoentation = val =>
  ((Number(val.toString()) / 1e27) ** (86400 * 365) - 1) * 100

async function trySubgraph() {
  try {
    const res = await fetch(
      "https://subgraph.reflexer.finance/subgraphs/name/reflexer-labs/rai",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ query: statisticsQuery() }),
      }
    )
    const { data } = await res.json()
    return data
  } catch (error) {
    return false
  }
}

export default function useStats() {
  const [state, setState] = useState({ pRate: 0, iRate: 0 })
  const geb = useGeb()

  const getRatesCallback = useCallback(async ([LastPT, SG, LastIT, AG]) => {
    const pRate = yearlyExpoentation(
      gebUtils.RAY.add(LastPT.mul(SG).div(gebUtils.WAD))
    )
    const iRate = yearlyExpoentation(
      gebUtils.RAY.add(LastIT.mul(AG).div(gebUtils.WAD))
    )

    const subgraphData = await trySubgraph()
    const redemptionPrice = formatNumber(
      _.get(subgraphData, "systemState.currentRedemptionPrice.value", "0")
    )
    const currentRedemptionRate = formattedNum(
      getRatePercentage(
        _.get(
          subgraphData,
          "systemState.currentRedemptionRate.annualizedRate",
          "1"
        )
      )
    )
    const currentPrice = formatNumber(
      _.get(subgraphData, "systemState.currentCoinMedianizerUpdate.value", "0")
    )
    setState({
      pRate,
      iRate,
      currentPrice,
      redemptionPrice,
      currentRedemptionRate,
    })
  }, [])

  useEffect(() => {
    if (!geb) return
    geb
      .multiCall([
        geb.contracts.piCalculator.getLastProportionalTerm(true),
        geb.contracts.piCalculator.sg(true),
        geb.contracts.piCalculator.getLastIntegralTerm(true),
        geb.contracts.piCalculator.ag(true),
      ])
      .then(getRatesCallback)
      .catch(e => {
        console.log(e)
      })
  }, [geb, getRatesCallback])

  return useMemo(() => state, [state])
}
