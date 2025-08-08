describe("Cadastro", () => {
  it("Deve poder cadastrar um novo walker", () => {
    cy.visit("https://walkdog.vercel.app/signup");

    // Validando que o acesso foi realizado na tela de cadastro
    cy.get("h1")
      .should("be.visible")
      .and("have.text", "Faça seu cadastro");

    // Inserindo o nome  
    cy.get('[placeholder="Nome completo"]')
      .type("Kira Oliveira");

    // Inserindo o e-mail  
    cy.get('[placeholder="E-mail"]')
      .type("kira@email.com");

    // Inserindo o CPF - campo sem validação  
    cy.get('[placeholder^="CPF"]')
      .type("79788201067");

    // Inserindo o CEP  
    cy.get('[placeholder="CEP"]')
      .type("87210296");

    // Realizando o evento de clique para complentar os campos (Rua, Bairro e Cidade)    
    cy.get('[type=button][value="Buscar CEP"]')
      .click()  

    // Inserindo o número  
    cy.get('[placeholder="Número"]')
      .type("2");

    // Inserindo o complemento  
    cy.get('[placeholder="Complemento"]')
      .type("Apartamento 3");

    // Escolhendo entre a opção (Cuidar ou Adestrar)
    cy.contains('li', 'Cuidar')
      .click()
      
    // Realizando o upload do arquivo
    cy.get('[type=file')
      .selectFile('cypress/fixtures/rg.png',{force: true})

    // Realizando o evento do click no botão Cadastrar
    //cy.get('[type=submit]').click()
    cy.contains('button', 'Cadastrar')
      .click()

    // Validando que o cadastro foi realizado com sucesso
    cy.get('#swal2-html-container')
      .should('be.visible')
      .and('have.text', 'Recebemos o seu cadastro e em breve retornaremos o contato.')
  });
});