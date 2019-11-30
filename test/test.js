import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: dotDotDot} = indexModule

it("should run", () => {
  const string = "hello world"
  expect(dotDotDot(string)).toBe(string)
  expect(dotDotDot(string, 4)).toBe("hel…")
  expect(dotDotDot(string, 4, "...")).toBe("h...")
})