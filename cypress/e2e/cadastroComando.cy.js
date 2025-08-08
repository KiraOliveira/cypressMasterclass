describe("Cadastro", () => {
  
  // Cadastro realizado com sucesso  
  it("Deve poder cadastrar um novo walker com sucesso", () => {
    
    const walker = {
        name: 'Kira Oliveira',
        email: 'kira@walkdog.com',
        cpf: '79788201067',
        cep: '87210296',
        number: '2',
        info: 'Apartamento 3',
        document: 'rg.png'
    }

    cy.submitSignupForm(walker)

    // Validando que o cadastro foi realizado com sucesso
    cy.get('#swal2-html-container')
      .should('be.visible')
      .and('have.text', 'Recebemos o seu cadastro e em breve retornaremos o contato.')
     
    cy.contains('button', 'Voltar')
      .click()  
        
  });

  // Erro ao inserir um e-mail incorreto
  it("Não deve cadastrar com e-mail incorreto", () => {
    
    const walker = {
        name: 'Kira Oliveira',
        email: 'www.walkdog.com',
        cpf: '79788201067',
        cep: '87210296',
        number: '2',
        info: 'Apartamento 3',
        document: 'rg.png'
    }

    cy.submitSignupForm(walker)

    // Validando que exibiu a mensagem de erro abaixo do campo e-mail
    cy.get('.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe um email válido')
  });

  it("Não deve cadastrar quando o número for menor que '0'", () => {
    
    const walker = {
        name: 'Kira Oliveira',
        email: 'kira@walkdog.com',
        cpf: '79788201067',
        cep: '87210296',
        number: '0',
        info: 'Apartamento 3',
        document: 'rg.png'
    }

    cy.submitSignupForm(walker)

    // Validando que exibiu a mensagem de erro abaixo do campo número
    cy.get('.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe um número maior que zero')
  });
});

