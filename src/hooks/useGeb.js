import { useMemo } from "react"
import { Geb } from "geb.js"
import { ethers } from "ethers"

export const NETWORK_URL = process.env.NETWORK_URL || ""

export const provider = new ethers.providers.JsonRpcProvider(NETWORK_URL)

export default function useGeb() {
  return useMemo(() => {
    const geb = new Geb("mainnet", provider)
    return geb
  }, [])
}
