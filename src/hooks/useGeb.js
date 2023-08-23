import { useMemo } from "react"
import { Geb } from "geb.js"
import { ethers } from "ethers"
import { NETWORK_URL } from "../utils/constants"

export const provider = new ethers.providers.JsonRpcProvider(NETWORK_URL)

export default function useGeb() {
  return useMemo(() => {
    const geb = new Geb("mainnet", provider)
    return geb
  }, [])
}
