import { BrowserRouter } from "react-router-dom";
import ProfileIcon from "components/Header/ProfileIcon";

describe("Profile Icon component", () => {
  const path = "http://localhost/path/to/image";
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <ProfileIcon path={path} />
      </BrowserRouter>
    );
  });
  it("Should go to my account page when i click on my account", () => {
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click();
    cy.get('[data-testid="MyAccount"]').click();
    cy.url().should("eq", "http://localhost:8080/my-account");
  });
  it("Should go to the home page when the user clicks on the logout button", () => {
    cy.get('[data-testid="KeyboardArrowDownIcon"]').click();
    cy.get('[data-testid="logoutBtn"]').click();
    cy.url().should("eq", "http://localhost:8080/");
  });
});
