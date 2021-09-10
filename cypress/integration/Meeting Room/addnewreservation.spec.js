context("Addnewreservation", () => {

  it("Open Create New Reservation", () => {
    cy.login()
    cy.contains('Meeting Room').click()
    cy.contains('Approval Reservation').click()
    cy.contains('+ Create New Reservation').click()
  });

  it("Input New Reservation", () => {

    cy
    .get('.v-select__slot > input')
    .type('hradmin')
    .should("have.value", 'hradmin')
    .get('.v-select-list > .v-list > [role="listitem"] > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click();

    cy.random(10).then((result) => {
      cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input')
        .type(result).and('visible')
      })

    cy.randomnumber(10).then((result) => {
      cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input')
        .type(result).and('visible')
      })

    cy.dtmnow().then((result) => {
      cy.get('.md12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input')
        .type(result).and('visible')
        .get('.md12 > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').click()
      })

    cy
    .get(':nth-child(6) > .el-date-editor > .el-input__inner').click()
    .get('.el-scrollbar__view > :nth-child(1)').click().and('visible');

    cy
    .get(':nth-child(7) > .el-date-editor > .el-input__inner').click()
    .get('[style="width: 118.953px; position: absolute; top: 544px; left: 264px; z-index: 2003;"] > .el-scrollbar > .el-picker-panel__content > .el-scrollbar__view > :nth-child(2)')
    .click().and('visible');

    cy.random(10).then((result) => {
      cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input')
        .type(result).and('visible')
      })

    cy.get('.text-xs-center > .white--text > .v-btn__content').click()
  });

  it("Select Room", () => {
    cy.get('.v-card > :nth-child(1) > .v-btn > .v-btn__content').click()

  });

});
