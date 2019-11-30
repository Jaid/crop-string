/** @module dot-dot-dot */

/**
 * @function
 * @param {number} [compareValue]
 * @returns {number} Seconds passed since Unix epoch (01 January 1970)
 * @example
 * import dotDotDot from "dot-dot-dot"
 * const result = dotDotDot("hello", 4)
 * result === "hell"
 */
export default (string, maxLength = 16, endString = "…") => {
  const forcedString = String(string)
  if (forcedString.length < maxLength) {
    return forcedString
  }
  return forcedString.slice(0, maxLength - endString.length) + endString
}