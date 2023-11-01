import CreateProducts from "pages/MyAccount/CreateProducts";

describe("Create Products component", () => {
  beforeEach(() => {
    cy.mount(<CreateProducts />);
  });
  it("Should display the basic elements without the type field when the component loads", () => {
    cy.get('[data-testid="Select category"]');
    cy.get('[data-testid="Type"]').should("not.exist");
    cy.get('[data-testid="image"]');
    cy.get('[data-testid="title"]');
    cy.get('[data-testid="amount"]');
    cy.get('[data-testid="description"]');
  });
  it("Should display and remove images when they are select", () => {
    cy.get('input[type="file"]').selectFile(
      "public/root/how_it_works/browse_through_thousands_of_products.jpg"
    );
    cy.get('input[type="file"]').selectFile(
      "public/root/how_it_works/send_a_message_to_the_seller.jpg"
    );
    cy.get('input[type="file"]').selectFile(
      "public/root/how_it_works/browse_through_thousands_of_products.jpg"
    );
    cy.get('input[type="file"]').selectFile(
      "public/root/how_it_works/send_a_message_to_the_seller.jpg"
    );
    -cy.get('[data-testid="ClearIcon"]').should("have.length", 4);

    //remove the second and third image
    cy.get('[data-testid="ClearIcon"]').eq(1).click();
    cy.get('[data-testid="ClearIcon"]').eq(2).click();
    cy.get('[data-testid="ClearIcon"]').should("have.length", 2);
  });
  it("Should not submit the form if any of the inputs is empty", () => {
    // cy.get("[data-testid=description").type(
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
    // );
    // cy.get("[type=submit]").click()
    // cy.stub("util", "createProduct")
    // expect()
  });
  it("Should submit the form after all the inputs are filed", () => {});
});
