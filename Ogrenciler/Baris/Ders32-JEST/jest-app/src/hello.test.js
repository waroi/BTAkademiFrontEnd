const { sayHello } = require("./hello");

test("Hepsi Büyük dönüyor mu", () => {
  expect(sayHello("merhaba")).toBe("MERHABA");
});
