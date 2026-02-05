describe("Login Flow", () => {
  it("logs in with valid credentials", () => {
    cy.visit("http://localhost:5173");

    cy.get('[data-cy="email"]').type("test@gmail.com");
    cy.get('[data-cy="password"]').type("123456");
    cy.get('[data-cy="login-btn"]').click();

    cy.get('[data-cy="message"]').should(
      "contain",
      "Login successful"
    );
  });

  it("shows error for invalid credentials", () => {
    cy.visit("http://localhost:5173");

    cy.get('[data-cy="email"]').type("wrong@gmail.com");
    cy.get('[data-cy="password"]').type("wrong");
    cy.get('[data-cy="login-btn"]').click();

    cy.get('[data-cy="message"]').should(
      "contain",
      "Invalid credentials"
    );
  });
});
