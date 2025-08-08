// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando para cadastrar um Walker
Cypress.Commands.add('submitSignupForm', (walker) => {

    cy.visit("https://walkdog.vercel.app/signup");

    // Validando que o acesso foi realizado na tela de cadastro
    cy.get("h1")
      .should("be.visible")
      .and("have.text", "Faça seu cadastro");

    // Inserindo o nome  
    cy.get('[placeholder="Nome completo"]')
      .type(walker.name);

    // Inserindo o e-mail  
    cy.get('[placeholder="E-mail"]')
      .type(walker.email);

    // Inserindo o CPF - campo sem validação  
    cy.get('[placeholder^="CPF"]')
      .type(walker.cpf);

    // Inserindo o CEP  
    cy.get('[placeholder="CEP"]')
      .type(walker.cep);

    // Realizando o evento de clique para complentar os campos (Rua, Bairro e Cidade)    
    cy.get('[type=button][value="Buscar CEP"]')
      .click()  

    // Inserindo o número  
    cy.get('[placeholder="Número"]')
      .type(walker.number);

    // Inserindo o complemento  
    cy.get('[placeholder="Complemento"]')
      .type(walker.info);

    // Escolhendo entre a opção (Cuidar ou Adestrar)
    cy.contains('li', 'Cuidar')
      .click()
      
    // Realizando o upload do arquivo
    cy.get('[type=file')
      .selectFile(`cypress/fixtures/${walker.document}`,{force: true})

    // Realizando o evento do click no botão Cadastrar
    //cy.get('[type=submit]').click()
    cy.contains('button', 'Cadastrar')
      .click()
})