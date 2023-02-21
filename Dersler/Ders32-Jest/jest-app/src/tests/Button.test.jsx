import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

// const clickMock = jest.fn(() => {
//   console.log("clicked");
// });

test("Buton var mı?", () => {
  render(<Button id="btn" />);
  expect(screen.getByTestId("btn")).toBeInTheDocument();
});

test("Butonun text'i doğru mu?", () => {
  render(<Button id="btn" text="Deneme" />);
  const element = screen.getByTestId("btn");
  expect(element).toHaveTextContent("Deneme");
});
