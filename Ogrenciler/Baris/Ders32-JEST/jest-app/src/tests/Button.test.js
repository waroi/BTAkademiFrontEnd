import Button from "../components/Button";
import { fireEvent, render, screen } from "@testing-library/react";

const clickMock = jest.fn(() => console.log("clicked"));

test("buttton var mı?", () => {
  render(<Button id="btn" />);
  const element = screen.getByTestId("btn");
  expect(element).toBeInTheDocument("Deneme");
});
test("buttton var mı?", () => {
  render(<Button id="btn" text="Deneme" />);
  const element = screen.getByTestId("btn");
  expect(element).toHaveProperty("Deneme");
});
