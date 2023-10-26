import { render, screen, waitFor } from "@testing-library/react";
import MainHeader from "..";
import userEvent from "@testing-library/user-event";
import { signInWithGoogle, getUser } from "services/auth";

jest.mock("../../../../services/auth", () => ({
  signInWithGoogle: jest.fn(),
  getUser: jest.fn(),
}));

describe("Main Header component", () => {
  it("should show the sign in button when the user hasn't signed in", () => {
    render(<MainHeader user={{}} setUser={jest.fn()} />);
    expect(screen.getByTestId("signInBtn")).toBeInTheDocument();
    expect(screen.queryByTestId("profileMenu")).not.toBeInTheDocument();
  });

  it("should show the profile menu icon when the user is logged in", () => {
    render(<MainHeader user={{ email: "test-email" }} setUser={jest.fn()} />);
    expect(screen.queryByTestId("signInBtn")).not.toBeInTheDocument();
    expect(screen.getByTestId("profileMenu")).toBeInTheDocument();
  });

  it("should sign up the user when the user clicks on the sign in button", async () => {
    render(<MainHeader user={{}} setUser={jest.fn()} />);
    const signInBtn = screen.getByTestId("signInBtn");
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    await waitFor(() => userEvent.click(signInBtn));
    expect(signInWithGoogle).toHaveBeenCalledTimes(1);
    expect(getUser).toHaveBeenCalledTimes(1);
  });
});
