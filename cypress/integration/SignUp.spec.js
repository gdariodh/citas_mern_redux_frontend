/// <reference types='cypress'/>

describe("testing de SigUp - FULL", () => {
    it("Comprobar elementos y crear cuenta", () => {
        cy.visit("/signup")

        // comprobar que existan
        cy.get("[data-cy=img]").should('exist');
        cy.get("[data-cy=form]").should('exist');
        cy.get("[data-cy=user]").should('exist');
        cy.get("[data-cy=name]").should('exist');
        cy.get("[data-cy=email]").should('exist');
        cy.get("[data-cy=password]").should('exist');
        cy.get("[data-cy=re-password]").should('exist');

        // TODO: Crear cuenta

        // Caso 1: Envia form vacio
        cy.get("[data-cy=submit]").should('exist').click();
        // comprobar msg error
        cy.get("[data-cy=error-user]").should('exist').invoke("text").should("eq","El nombre de usuario es obligatorio");
        cy.get("[data-cy=error-name]").should('exist').invoke("text").should("eq","El nombre es obligatorio");
        cy.get("[data-cy=error-email]").should('exist').invoke("text").should("eq","Email es obligatorio");
        cy.get("[data-cy=error-password]").should('exist').invoke("text").should("eq","El password es obligatorio");
        cy.get("[data-cy=error-re-password]").should('exist').invoke("text").should("eq","La confirmacion de password es obligatoria");

        // Caso 2: Ingresa email no valido y password incompletos
        cy.get("[data-cy=user]").type("test")
        cy.get("[data-cy=name]").type("test")
        cy.get("[data-cy=email]").type("test.com")
        cy.get("[data-cy=password]").type("123456")
        cy.get("[data-cy=re-password]").type("123456")
        cy.get("[data-cy=submit]").click();
        // comprobar msg error
        cy.get("[data-cy=error-email]").should('exist').invoke("text").should("eq","Email no valido");
        cy.get("[data-cy=error-password]").should('exist').invoke("text").should("eq","Debe tener al menos 8 caracteres");

        // Caso 3: Password no son iguales
        cy.get("[data-cy=password]").type("78")
        cy.get("[data-cy=re-password]").type("77")
        cy.get("[data-cy=submit]").click();

        // Caso 4: Ingresa todo bien, pero el usuario es repetido
        cy.get("[data-cy=email]").clear().type("test@test.com")
        cy.get("[data-cy=re-password]").clear().type("12345678")
        cy.get("[data-cy=submit]").click();

        // Caso 5: Ingresa un correo que no es repetido
        cy.get("[data-cy=email]").clear().type("test12@test.com")
        cy.get("[data-cy=submit]").click();

        
        // cerrar sesion 
        cy.get("[data-cy=header]").should("exist")
        cy.get("[data-cy=logout]").should("exist").click()
    })
})