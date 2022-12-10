describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Olá Mundo");
  });
});
