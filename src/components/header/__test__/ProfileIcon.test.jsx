import { render, screen, waitFor } from "@testing-library/react";
import ProfileIcon from "../ProfileIcon";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { logOut } from "services/auth";

jest.mock("../../../services/auth", () => ({
  logOut: jest.fn(),
}));

describe("Profile Icon component", () => {
  const path = "http://localhost/path/to/image";
  it("Should display the profile image given the url", () => {
    render(
      <BrowserRouter>
        <ProfileIcon src={path} />
      </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByTestId("image").firstChild.src).toBe(path);
  });

  it("Should show popup menu when the profile icon menu is clicked", async () => {
    render(
      <BrowserRouter>
        <ProfileIcon src={path} />
      </BrowserRouter>
    );
    await waitFor(() =>
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      userEvent.click(screen.getByTestId("KeyboardArrowDownIcon"))
    );
    expect(screen.getByTestId("profileIconMenu")).toBeInTheDocument();
  });
  it("Should not show the popup menu when the profile menu isn't clicked", () => {
    render(
      <BrowserRouter>
        <ProfileIcon src={path} />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("profileIconMenu")).not.toBeInTheDocument();
  });
  it("Should logout the user when the user clicks on the logout button", async () => {
    render(
      <BrowserRouter>
        <ProfileIcon src={path} />
      </BrowserRouter>
    );
    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      userEvent.click(screen.getByTestId("KeyboardArrowDownIcon"));
      //   eslint-disable-next-line testing-library/no-wait-for-side-effects
      userEvent.click(screen.getByTestId("logoutBtn"));
    });
    expect(logOut).toHaveBeenCalledTimes(1);
  });
});
