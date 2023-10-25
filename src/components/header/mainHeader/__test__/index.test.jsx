import { render, screen, waitFor } from "@testing-library/react";
import MainHeader from "..";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Main Header component", () => {
  it("should should show the sign in button", () => {
    render(<MainHeader />);
    const signInBtn = screen.getByTestId("signInBtn");
    expect(signInBtn).toBeInTheDocument();
  });
  it("should sign up the user when the user clicks on the sign in button", async () => {
    const signInWithGoogle = jest.fn();
    render(<MainHeader signInWithGoogle={signInWithGoogle} />);
    const signInBtn = screen.getByTestId("signInBtn");
    await waitFor(() => userEvent.click(signInBtn));
    expect(signInWithGoogle).toHaveBeenCalledTimes(1);
  });
});
