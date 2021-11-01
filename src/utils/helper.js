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
