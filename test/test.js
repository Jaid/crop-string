import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: cropString} = indexModule

it("should run", () => {
  const string = "hello world"
  expect(cropString(string)).toBe(string)
  expect(cropString(string, 4)).toBe("hel…")
  expect(cropString(string, 4, "...")).toBe("h...")
})