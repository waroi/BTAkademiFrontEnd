const { sayHello } = require("./hello");

test("merhaba = MERHABA olması lazım", () => {
  expect(sayHello("merhaba")).toBe("MERHABA");
});
