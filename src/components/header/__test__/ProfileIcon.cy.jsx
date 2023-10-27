import { BrowserRouter } from "react-router-dom";
import ProfileIcon from "../ProfileIcon";

describe("Profile Icon component", () => {
  it("Should go to my account page when i click on my account", () => {
    const path = "http://localhost/path/to/image";
    cy.mount(
      <BrowserRouter>
        <ProfileIcon path={path} />
      </BrowserRouter>
    );
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click();
    cy.get('[data-testid="MyAccount"]').click();
    cy.url().should("include", "/my-account");
  });
});
