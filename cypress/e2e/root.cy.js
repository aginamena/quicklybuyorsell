describe("Root page", () => {
  it("Can load the root page", () => {
    cy.visit("http://localhost:3000");
  });
});
