// // context('Special UI elements testing', () => {

// //   it('Slider testing', () => {
// //     cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
// //     //Get slider and invoke 'val' method on it. 
// //     //Val method is invoked with integer value which is expected to be selected on slider. 
// //     //Trigger command triggers event ('change') on slider value.
// //     cy.get('input[type=range]').invoke('val', 5).trigger('change');
// //     //Assert text value displayed on slider. 
// //     cy.get('#range').should('have.text', '5');

// // context('Special UI elements testing', () => {
// //   describe('Slider tests', () => {
// //     it('Selecting value on slider', () => {
// //       cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
// //       //Get slider and invoke 'val' method on it. 
// //       //Val method is invoked with integer value which is expected to be selected on slider. 
// //       //Trigger command triggers event ('change') on slider value.
// //       cy.get('input[type=range]').invoke('val', 5).trigger('change');
// //       //Assert text value displayed on slider. 
// //       cy.get('#range').should('have.text', '5');
// //     })
// //   })

// //   it('Compare DOM options list with required list', () => {
// //     //Getting data file and aliasing it for later usage (data file contains required list of speed options)
// //     cy.fixture('demoqa_site_data').as('demoqa_site_data')

// //     cy.visit('https://demoqa.com/selectmenu/');
// //     //Gettting aliased data and returning it with then() callback function. 
// //     cy.get('@demoqa_site_data').then((demoqadata) => {

// //       //Variable which stores required speed options (taken from fixture file). 
// //       const requiredSpeedOptions = demoqadata.speedOptionsList;
// //       //Variable which collects speed options retrieved from DOM list. 
// //       var availableSpeedOptions = [];
// //       //Loop which collect option's text and append it to the list. 
// //       cy.get('#speed>option').each(($elem) => {
// //         availableSpeedOptions.push($elem.text())
// //       }).then(() => {
// //         //Assert if list of DOM speed options is in accordance with required speed list option. 
// //         expect(availableSpeedOptions).to.be.eql(requiredSpeedOptions)

// //   describe('Select menu testing', () => {

// //     beforeEach( ()=> {

// //       cy.visit('https://demoqa.com/selectmenu/');

// //       //Getting data file and aliasing it for later usage (data file contains required list of speed options).
// //       cy.fixture('demoqa_site_data').as('demoqa_site_data')
// //     });

// //     it('Compare DOM options list with required list', () => {
// //       //Gettting aliased data and returning it with then() callback function. 
// //       cy.get('@demoqa_site_data').then((demoqadata) => {
// //         //Variable which stores required speed options (taken from fixture file). 
// //         const requiredSpeedOptions = demoqadata.speedOptionsList;
// //         //Variable which collects speed options retrieved from DOM list. 
// //         var availableSpeedOptions = [];
// //         //Loop which collect option's text and append it to the list. 
// //         cy.get('#speed>option').each(($elem) => {
// //           availableSpeedOptions.push($elem.text())
// //         }).then(() => {
// //           //Assert if list of DOM speed options is in accordance with required speed list option. 
// //           expect(availableSpeedOptions).to.be.eql(requiredSpeedOptions)
// //         })
// //       })
// //     })

//     it('Select random element from select menu', () => {
//       cy.visit('https://the-internet.herokuapp.com/context_menu');
//       //Use demoqa site data - return it as then() callbackfunction. 
//       cy.get('@demoqa_site_data').then((demoqadata) => {
//         //Variable which stores speed value randomy selected from demoqa site data. 
//           let randomSpeedValue = Cypress._.sample(demoqadata.speedOptionsList) 
//         //Click on select menu.    
//           cy.get('#speed-button').click()
//         //Assert if expanded select menu list is visible. 
//           cy.get('#speed-menu').should('be.visible')
//         //Click speed value.
//           cy.get('li').contains(randomSpeedValue).click().then(() => {
//         //Assert if expanded select menu list is not visible. 
//           cy.get('#speed-menu').should('not.be.visible')
//           })
//       });
//     });
//   });