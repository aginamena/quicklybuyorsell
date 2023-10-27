import { render, screen, waitFor } from "@testing-library/react";
import ProfileIcon from "../ProfileIcon";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Profile Icon", () => {
  it("Should display the profile image given the url", () => {
    const path = "http://localhost/path/to/image";
    render(
      <BrowserRouter>
        <ProfileIcon src={path} />
      </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByTestId("image").firstChild.src).toBe(path);
  });
  it("should show popup menu when the profile icon menu is clicked", async () => {
    render(
      <BrowserRouter>
        <ProfileIcon src={"http://localhost/path/to/image"} />
      </BrowserRouter>
    );
    await waitFor(() =>
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      userEvent.click(screen.getByTestId("KeyboardArrowDownIcon"))
    );
    expect(screen.getByTestId("profileIconMenu")).toBeInTheDocument();
  });
  it("should not show the popup menu when the profile menu isn't clicked", () => {
    render(
      <BrowserRouter>
        <ProfileIcon src={"http://localhost/path/to/image"} />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("profileIconMenu")).not.toBeInTheDocument();
  });
});
