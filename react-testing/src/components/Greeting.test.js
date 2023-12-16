import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

test("renders hello world as a text", () => {
  //Arrange
  render(<Greeting />);
  //Act
  const helloWorldElement = screen.getByText("Hello, world!");
  expect(helloWorldElement).toBeInTheDocument();
});

test("renders good to see you if the button was NOT clicked", () => {
  //Arrange
  render(<Greeting />);
  //Act
  const goodToSeeYouElement = screen.getByText("It's good to see you!");
  expect(goodToSeeYouElement).toBeInTheDocument();
});

test("renders changed if the button was clicked", () => {
  //Arrange
  render(<Greeting />);
  //Act
  const buttonElement = screen.getByRole("button");
  buttonElement.click();
  const changedElement = screen.getByText("Changed!");
  expect(changedElement).toBeInTheDocument();
});

test("does not render good to see you if the button was clicked", () => {
  //Arrange
  render(<Greeting />);
  //Act
  const buttonElement = screen.getByRole("button");
  buttonElement.click();
  const goodToSeeYouElement = screen.queryByText("It's good to see you!");
  //Assert
  expect(goodToSeeYouElement).toBeNull();
});
