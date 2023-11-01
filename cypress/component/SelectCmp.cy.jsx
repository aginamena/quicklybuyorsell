import SelectCmp from "components/SelectCmp";

describe("Select component", () => {
  const props = {
    name: "testCategory",
    menuItems: ["firstItem", "secondItem", "thirdItem", "fourthItem"],
    handleSelect: () => {},
  };
  beforeEach(() => {
    cy.mount(<SelectCmp {...props} />);
  });

  it("Should display the name of the input", () => {
    cy.get('[data-testid="inputLabel"').should("have.text", props.name);
  });
  it("Should display the menu items", () => {
    cy.get('[data-testid="select"]').click();
    cy.get('[role="option"]').should("have.length", props.menuItems.length);
    props.menuItems.forEach((menuItem, index) => {
      cy.get('[role="option"]').eq(index).should("have.text", menuItem);
    });
  });
  it("Should display the clicked menu item in the select box when a menu item is clicked", () => {
    props.menuItems.forEach((menuItem, index) => {
      cy.get('[data-testid="select"]').click();
      cy.get('[role="option"]').eq(index).click();
      cy.get('[role="combobox"]').should("have.text", menuItem);
    });
  });
});
