describe("Header component", () => {
  it("Should display the SubHeader component when the url pathname is at the root page", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="SubHeader"]');
  });
  it("Should not display the SubHeader component when the url path name isn't the root page", () => {
    cy.visit("http://localhost:3000/my-account");
    cy.get('[data-testid="SubHeader"]').should("not.exist");
  });
});
