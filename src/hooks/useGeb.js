import { useMemo } from "react"
import { Geb } from "geb.js"
import { ethers } from "ethers"

const NETWORK_URL =
  process.env.NETWORK_URL ||
  "https://mainnet.infura.io/v3/645c2c65dd8f4be18a50a0bf011bab85"
export const provider = new ethers.providers.JsonRpcProvider(NETWORK_URL)

export default function useGeb() {
  return useMemo(() => {
    const geb = new Geb("mainnet", provider)
    return geb
  }, [])
}
