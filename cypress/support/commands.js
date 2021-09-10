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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';


Cypress.Commands.add('login', (hradmin,betul) => {
  // cy.server()
  //   .route('https://cms.tenggo.id/#/myreservation').as('dashboard')
  cy.visit('/')
  cy.get('input[name="login"]').type('hradmin')
    .should("have.value", 'hradmin')
  cy.get('input[id="password"]').type('betul')
    .should("have.value", 'betul')
  cy.contains('Login').click()

  cy.get('img').and('visible')
  // cy.wait('@dashboard')

})

//datenow
Cypress.Commands.add('dtmnow', (todaysdate) => {
  var text = "";

    text += Cypress.moment().format('YYYY-MM-DD');

  return text;

  //
  // const todaysdate = Cypress.moment().format('YYYY-MM-DD')
  // MMM = nama bulan, MM =  tanggal bulan
})

//date h-
Cypress.Commands.add('dtmnow', (todaysdate) => {
  var text = "";

    text += Cypress.moment().subtract(2, 'month').format('YYYY-MM-DD');

  return text;

  //
  // const todaysdate = Cypress.moment().format('YYYY-MM-DD')
  // .subtract(2, 'month') / .subtract(2, 'date') / .subtract(2, 'year')
})





Cypress.Commands.add('random', (string_length) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (var i = 0; i < string_length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

})

Cypress.Commands.add('randomnumber', (string_length) => {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < string_length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

})

Cypress.Commands.add('random1', (string_length) => {
  let random_string = '';
  let random_ascii;
  for(let i = 0; i < string_length; i++) {
      random_ascii = Math.floor((Math.random() * 25) + 97);
      random_string += String.fromCharCode(random_ascii)
  }
  return random_string
 });
