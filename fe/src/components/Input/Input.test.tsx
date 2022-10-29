import Input from "./";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Input test", () => {
  test("should change the type attribute of the input with the click on the eyebutton", () => {
    render(
      <Input
        label=""
        type="password"
        name="inputTest"
        placeholder="input-test"
      />
    );

    const eyeButton = screen.getByRole("button");
    userEvent.click(eyeButton);

    const input = screen.getByPlaceholderText("input-test");
    screen.debug();
    expect(input).toHaveAttribute("type", "text");
  });
});
