import Numeral from "numeral"

export const SmoothVerticalScrolling = (e, time, where) => {
  var eTop = e.getBoundingClientRect().top
  var eAmt = eTop / 100
  var curTime = 0
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where)
    curTime += time / 100
  }
}

export const SVS_B = (eAmt, where) => {
  if (where === "center" || where === "") window.scrollBy(0, eAmt / 2)
  if (where === "top") window.scrollBy(0, eAmt)
}

export function findAllByKey(obj, keyToFind) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      key === keyToFind
        ? acc.concat(value)
        : typeof value === "object"
        ? acc.concat(findAllByKey(value, keyToFind))
        : acc,
    []
  )
}

export const isBrowser = () => typeof window !== "undefined"

export const slugifyTitle = title => {
  return title
    ? title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
    : ""
}

export const returnNoOfWords = (text, n) => {
  // This expressions returns the first N (any) characters plus any subsequent non-space characters.
  var cut = text.indexOf(" ", n)
  if (cut === -1) return text
  return text.substring(0, cut)
}
export const toK = num => {
  return Numeral(num).format("0.[00]a")
}
const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
})

export const formatNumber = (value, digits = 4, round = false) => {
  const nOfDigits = Array.from(Array(digits), _ => 0).join("")
  const n = Number(value)
  if (Number.isInteger(n) || value.length < 5) {
    return n
  }
  if (round) {
    return Number(Numeral(n).format(`0.${nOfDigits}`))
  }
  return Number(Numeral(n).format(`0.${nOfDigits}`, Math.floor))
}

export const formattedNum = (number, usd = false, acceptNegatives = false) => {
  if (isNaN(number) || number === "" || number === undefined) {
    return usd ? "$0" : 0
  }
  let num = parseFloat(number)

  if (num > 500000000) {
    return (usd ? "$" : "") + toK(num.toFixed(0))
  }

  if (num === 0) {
    if (usd) {
      return "$0"
    }
    return 0
  }
  if (num > 0 && num < 0.001) {
    return usd ? "< $0.001" : "< 0.001"
  }

  if (num < 0 && num > -0.001) {
    return usd ? "> -$0.001" : "> -0.001"
  }

  if (num > 1000) {
    return usd
      ? "$" + Number(parseFloat(String(num)).toFixed(0)).toLocaleString()
      : "" + Number(parseFloat(String(num)).toFixed(0)).toLocaleString()
  }

  if (usd) {
    if (num < 0.1) {
      return "$" + Number(parseFloat(String(num)).toFixed(3))
    } else {
      let usdString = priceFormatter.format(num)
      return "$" + usdString.slice(1, usdString.length)
    }
  }

  return Number(parseFloat(String(num)).toFixed(3))
}

export const getRatePercentage = value => {
  const rate = Number(value)
  let ratePercentage = rate < 1 ? (1 - rate) * -1 : rate - 1
  return ratePercentage * 100
}
