const { addNumbers, subtractNumbers } = require("../src/utils.js");
test("Addition", () => {
  expect(addNumbers(2, 3)).toBe(5);
});
test("Soustraction", () => {
  expect(subtractNumbers(5, 3)).toBe(2);
});
