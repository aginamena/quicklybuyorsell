import { render, screen } from "@testing-library/react";
import MyAccount from "..";

describe("My Account component", () => {
  it("Should diplay tabs required for sellers to operate", () => {
    render(<MyAccount />);
    expect(screen.getByTestId("createProduct")).toBeInTheDocument();
    expect(screen.getByTestId("viewProducts")).toBeInTheDocument();
  });
});
