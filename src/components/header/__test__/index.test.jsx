import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getUser, signInWithGoogle } from "services/auth";
import MainHeader from "../MainHeader";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../services/auth", () => ({
  signInWithGoogle: jest.fn(),
  getUser: jest.fn(),
}));

describe("Main Header component", () => {
  it("should show the sign in button when the user hasn't signed in", () => {
    render(
      <BrowserRouter>
        <MainHeader user={{}} setUser={jest.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("signInBtn")).toBeInTheDocument();
    expect(screen.queryByTestId("profileMenu")).not.toBeInTheDocument();
  });

  it("should show the profile menu icon when the user is logged in", () => {
    render(
      <BrowserRouter>
        <MainHeader user={{ email: "test-email" }} setUser={jest.fn()} />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("signInBtn")).not.toBeInTheDocument();
    expect(screen.getByTestId("profileMenu")).toBeInTheDocument();
  });

  it("should sign up the user when the user clicks on the sign in button", async () => {
    render(
      <BrowserRouter>
        <MainHeader user={{}} setUser={jest.fn()} />
      </BrowserRouter>
    );
    const signInBtn = screen.getByTestId("signInBtn");
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    await waitFor(() => userEvent.click(signInBtn));
    expect(signInWithGoogle).toHaveBeenCalledTimes(1);
    expect(getUser).toHaveBeenCalledTimes(1);
  });
});
