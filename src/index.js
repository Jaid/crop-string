/** @module dot-dot-dot */

/**
 * @function
 * @param {string} string
 * @param {number} [maxLength=16]
 * @param {string} [endString="…"]
 * @returns {string} A string that with a length that equals to or is smaller than maxLength
 * @example
 * import dotDotDot from "dot-dot-dot"
 * const result = dotDotDot("hello", 4)
 * result === "hel…"
 */
export default (string, maxLength = 16, endString = "…") => {
  const forcedString = String(string)
  if (forcedString.length < maxLength) {
    return forcedString
  }
  return forcedString.slice(0, maxLength - endString.length) + endString
}