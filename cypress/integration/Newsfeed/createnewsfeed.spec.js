context("Addnewreservation", () => {

  it("Open Create New Reservation", () => {
    cy.login()
    cy.contains('Newsfeed').click()
      .get('.right > .v-btn__content').click()
    });

  it("Input New Feeds", () => {
    cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input')
      .type('Test12!@aaaaaaaaaaaaa')
      .should("have.value", 'Test12!@aaaaaaaaaaaaa')

    cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
      .get(':nth-child(3) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
      .get(':nth-child(4) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()

    cy.get('textarea').dblclick()
      .type('bcdefgaaaaa')
      .should("have.value", 'bcdefgaaaaa')

    // cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').click()
    //  .get(':nth-child(5) > :nth-child(4) > .v-btn > .v-btn__content').click()
    

    // cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').click()
    //   .get('.menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(5) > :nth-child(4) > .v-btn > .v-btn__content').click()
    
});

    describe('Upload file', () => {
    beforeEach(() => {
    //cy.visit('/home/pedro/Documents/Automation Testing/tenggo/cypress/fixtures/cy.png');

});

      it('successfully uploads a file', () => {
        cy
        .fixture('cy.png', 'base64')
        .then(fileContent => {
          cy
          .get('.subheading > input').click()
          .upload(
            { fileContent, fileName: 'cy.png', mimeType: 'image/png' },
            { subjectType: 'input' },
          );
          });

          //cy
        //.get('.subheading > input').click()
          //.get('li')
          //.contains('cy.png');

          cy
          .get('.v-select__selections > input')
          .type('a')
          .should("have.value", 'a')
          .get('.v-list > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click()
          ;

  });


  it("Click submit", () => {
    cy.get('.text-xs-center > .white--text > .v-btn__content').click();
  });

});
});
