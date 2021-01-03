/// <reference types='cypress'/>

describe("Testing CRUD & Likes", () => {
  it("Usuario hace login", () => {
    cy.visit("/");

    // Login user
    cy.get("[data-cy=btn-login]").should("exist").click();
    cy.get("[data-cy=user]").type("test@test.com");
    cy.get("[data-cy=password]").clear().type("12345678");
    cy.get("[data-cy=submit]").click();

    // comprobar layout para saber si carga el componente
    cy.get("[data-cy=panel]").should("exist");
    cy.get("[data-cy=header]").should("exist");

    // cy.get("[data-cy=list-dates]").should("exist")
  });

  it("Crea cita", () => {
    cy.get("[data-cy=no-date]").should("exist");
    cy.get("[data-cy=create]").should("exist").click();
    cy.scrollTo(0, 450, { duration: 3.4 }); // TODO: deslizar en la pantalla 450px hacia abajo, duration es lo que esperara para hacer el scroll que es 3.4 seg

    // verificar que exista el formulario
    cy.get("[data-cy=form]").should("exist");

    // crear cita

    // Caso 1: envia form vacio
    cy.get("[data-cy=submit]").should("exist").click();
    // msg error de alertas
    cy.get("[data-cy=error-name]")
      .should("exist")
      .invoke("text")
      .should("eq", "El titulo es obligatorio");
    cy.get("[data-cy=error-client]")
      .should("exist")
      .invoke("text")
      .should("eq", "Agrega un cliente");
    cy.get("[data-cy=error-date]")
      .should("exist")
      .invoke("text")
      .should("eq", "Debes asignar una fecha a la cita");
    cy.get("[data-cy=error-hour]")
      .should("exist")
      .invoke("text")
      .should("eq", "Asigna una hora");
    cy.get("[data-cy=error-category]")
      .should("exist")
      .invoke("text")
      .should("eq", "Añade una categoria");
    cy.get("[data-cy=error-description]")
      .should("exist")
      .invoke("text")
      .should("eq", "¿De qué trata la cita?");

    // Caso 2: Llenar form y crea la cita
    cy.get("[data-cy=name]").should("exist").type("test titulo 1");
    cy.get("[data-cy=client]").should("exist").type("test client 1");
    // para fechas tienes que usar el formato yyyy/mm/dd, porque si no agarra
    cy.get("[data-cy=date]").should("exist").type("2021-03-12");
    cy.get("[data-cy=hour]").should("exist").type("12:30"); // asi se pasa una hora
    // para elegir una opcion del select es de esta forma
    cy.get("[data-cy=category]").should("exist").select("deporte");
    cy.get("[data-cy=description]").should("exist").type("test description");
    cy.get("[data-cy=submit]").should("exist").click();
  });

  it("Usuario ve la cita completa", () => {
    // seleccionar la nota de la lista de notas

    // :nth-child(1) selecciona el primer children de la lista
    cy.get("[data-cy=date-select]:nth-child(1) [data-cy=more-date]").dblclick(); // date-select & more-date estan en DatePreview
  });

  it("Edita la cita", () => {
    cy.get("[data-cy=date-select]:nth-child(1) [data-cy=edit-date]").dblclick();

    // Edita la cita
    cy.get("[data-cy=name]").should("exist").clear().type("cita EDITADA");
    cy.get("[data-cy=client]")
      .should("exist")
      .clear()
      .type("test client 1 - EDITADA");
    cy.get("[data-cy=category]").should("exist").select("medico");
    cy.get("[data-cy=date]").should("exist").clear().type("2021-03-08");
    cy.get("[data-cy=hour]").should("exist").clear().type("14:45");
    cy.get("[data-cy=description]")
      .should("exist")
      .clear()
      .type(
        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      );
    cy.get("[data-cy=submit]").should("exist").click();
  });

  it("Dar like a la segunda cita y tercera cita", () => {
    cy.get("[data-cy=date-select]:nth-child(2) [data-cy=like-date]").dblclick();
    cy.get("[data-cy=date-select]:nth-child(3) [data-cy=like-date]").dblclick();
  });

  it("Usuario ve sus citas favoritas y quita el like a la segunda cita", () => {
      cy.get("[data-cy=favorites]").should("exist").click()
      cy.get("[data-cy=date-select]:nth-child(1) [data-cy=dislike-date]").dblclick();
  });

  it("Filtrar las citas que tenga la categoria de deporte", () => {
      cy.get("[data-cy=filter]").should('exist').click()
      cy.get("[data-cy=category]").should("exist").select("deporte");
  });

  it("Elimina una cita",() => {
    cy.get("[data-cy=date-select]:nth-child(3) [data-cy=delete-date]").dblclick();
  })

});
