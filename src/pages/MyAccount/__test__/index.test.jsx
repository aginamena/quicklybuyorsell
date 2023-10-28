import { render, screen, waitFor } from "@testing-library/react";
import MyAccount from "..";
import userEvent from "@testing-library/user-event";

describe("My Account component", () => {
  it("Should display necessary tabs required for sellers and buyers to operate", () => {
    render(<MyAccount />);
    expect(screen.getByTestId("Create Products")).toBeInTheDocument();
    expect(screen.getByTestId("View Products")).toBeInTheDocument();
  });
  it("Should display Create Products component when the Create Products tab is clicked", () => {
    render(<MyAccount />);
    waitFor(() => userEvent.click(screen.getByTestId("Create Products")));
    expect(screen.getByTestId("Create Products Cmp")).toBeInTheDocument();
  });
  it("Should display Create Products component when the Create Products tab is clicked from View Products tab", () => {
    render(<MyAccount />);
    waitFor(() => {
      userEvent.click(screen.getByTestId("View Product"));
      userEvent.click(screen.getByTestId("Create Products"));
      expect(screen.getByTestId("Create Products Cmp")).toBeInTheDocument();
    });
  });
  it("Should display View Products component when the View Products tab is clicked", () => {
    render(<MyAccount />);
    waitFor(() => {
      userEvent.click(screen.getByTestId("View Products"));
      expect(screen.getByTestId("View Products Cmp")).toBeInTheDocument();
    });
  });
});
