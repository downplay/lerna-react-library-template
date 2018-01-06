/* global Cypress cy describe it */

const root = "http://localhost:1234";

describe("My Component Demo", () => {
    it("loads home page", () => {
        cy.visit(`${root}/`);
        cy.title().should("include", "My Component Demo");
        cy.get("[data-test=header]").should("contain", "My Component");
    });
});
