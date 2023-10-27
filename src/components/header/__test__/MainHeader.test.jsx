import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { signInWithGoogle } from "services/auth";
import { getUser } from "services/users";
import MainHeader from "../MainHeader";

jest.mock("../../../services/auth", () => ({
  signInWithGoogle: jest.fn(),
}));
jest.mock("../../../services/users", () => ({
  getUser: jest.fn(),
}));
describe("Main Header component", () => {
  it("Should show the sign in button when the user hasn't signed in", () => {
    render(
      <BrowserRouter>
        <MainHeader user={{}} setUser={jest.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("signInBtn")).toBeInTheDocument();
    expect(screen.queryByTestId("profileMenu")).not.toBeInTheDocument();
  });

  it("Should show the profile menu icon when the user is logged in", () => {
    render(
      <BrowserRouter>
        <MainHeader
          user={{
            email: "test-email",
            photoURL: "http://localhost/path/to/image",
          }}
          setUser={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("signInBtn")).not.toBeInTheDocument();
    expect(screen.getByTestId("profileMenu")).toBeInTheDocument();
  });

  it("Should sign up the user when the user clicks on the sign in button", async () => {
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
