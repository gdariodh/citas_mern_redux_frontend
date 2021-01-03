/// <reference types='cypress'/>

describe("testing de login - FULL", () => {
    it("Comprobar elementos y hacer login", () => {
        cy.visit('/login')

        cy.get("[data-cy=img-login]").should('exist');
        cy.get("[data-cy=form]").should('exist');
        cy.get("[data-cy=user]").should('exist');
        cy.get("[data-cy=password]").should('exist');

        // Caso 1: Envia Formulario incompleto
        cy.get("[data-cy=submit]").should('exist').click();
        // comprobar msg errors
        cy.get("[data-cy=error-user]").should('exist').invoke("text").should("eq","Debes ingresar un email o un usuario")
        cy.get("[data-cy=error-password]").should('exist').invoke("text").should("eq","El password es obligatorio")
       
        // Caso 2: Ingresa un usuario, pero password no tiene 8 caracteres
        cy.get("[data-cy=user]").type("test@test.com");
        cy.get("[data-cy=password]").type("12345")
        // comprobar msg error
        cy.get("[data-cy=error-password]").should('exist').invoke("text").should("eq","Debe tener al menos 8 caracteres")
        
        // Caso 3: Ingresa password que no es del usuario
        cy.get("[data-cy=password]").type("234");
        cy.get("[data-cy=submit]").click();
       
        // Caso 4: Ingresa password bien
        cy.get("[data-cy=password]").clear().type("12345678");
        cy.get("[data-cy=submit]").click(); // TODO: login exitoso

        // cerrar sesion 
        cy.get("[data-cy=header]").should("exist")
        cy.get("[data-cy=logout]").should("exist").click()

        
        
    
    })
})