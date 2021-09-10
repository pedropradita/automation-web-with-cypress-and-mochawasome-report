context("Login", () => {

  beforeEach(() => {
    cy.visit("/");
  })

    it("Can find and type in username", () => {
      cy.get('input[name="login"]')
        .type("")
        .should("have.value", "");
    });

    it("Can find and type in password", () => {
      cy.visit("https://cms.tenggo.id");
      cy.get('input[id="password"]')
        .type("")
        .should("have.value", "")
    });


    it("Will succeed when type valid user credentials", () => {
      // cy.server()
      //   .route({
      //   method: 'POST',
      //   url: '/api/v1/auth/login',
      //   response: '',
      //   status: 200
      // })
      // .as("login")

      // cy.server()
      // cy.route({
      //   method: 'GET',
      //   url: '/api/v1/reservations/user/monthly?employee_id=3&page=1&query=0&year=&status=all',
      //   response: '',
      //   status: 200
      // })

      cy.get('input[name="login"]').type('')
        .should("have.value", '');
      cy.get('input[id="password"]').type('')
        .should("have.value", '');
      cy.contains('Login').click({force:true})
      cy.get('img').and('visible')
          // .wait('@login')

    });


    it("Will failed when type invalid user credentials", () => {
      cy.server()
      cy.route({
        method: 'POST',
        url: '/api/v1/auth/login',
        response: '',
        status: 401
      })

      cy.random(10).then((result) => {
        cy.get('input[name="login"]').type(result)
        })

      cy.random(10).then((result) => {
        cy.get('input[id="password"]').type(result)
        })

      cy.contains('Login').click()

      cy.contains('Username or Password Incorrect.').should('be.visible');

    });

    it("Will failed when not type user credentials", () => {
      cy.server()
      cy.route({
        method: 'POST',
        url: '/api/v1/auth/login',
        response: '',
        status: 401
      })

      cy.contains('Login').click()
      cy.contains('Username cannot be empty').should('be.visible')
      cy.contains('Password is required').should('be.visible')
      cy.contains('Username or Password Incorrect.').should('be.visible')

    });

  });
