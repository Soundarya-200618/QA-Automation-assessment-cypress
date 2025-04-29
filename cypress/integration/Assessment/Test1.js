describe('Automation technical assessment', function(){

    it('Test cases of technical assessment', function()
    {

        
//hitting matchingengine.com url
cy.visit("https://www.matchingengine.com/");

//Expanding modules section
cy.get('#burger').click();


//Clicking Repertoire Management Module from menu
cy.get('.navbar-dropdown a')
.contains('Repertoire Management Module')
.click();
cy.wait(1000)


// Scrolling  to 'Additional Features' section
cy.get('.vc_custom_heading')
  .contains('Additional Features')
  .scrollIntoView({behavior:'smooth'}).should('be.visible');
  cy.log("Scrolled to Additional features")
 

  //Clicking on Products supported 
  cy.get('.vc_tta-title-text').contains('Products Supported').should('be.visible').click();
  
  //Asserting the list of supported products
  const supportedProducts = ['Cue Sheet / AV Work', 'Recording', 'Bundle', 'Advertisement'];
  cy.contains('h3', 'There are several types of Product Supported:')
  .closest('.wpb_wrapper')
  .find('ul li span')
  .should('have.length', supportedProducts.length)
  .each((el, i) =>
    cy.wrap(el)
      .invoke('text')
      .then(text => {
        expect(text.trim()).to.eq(supportedProducts[i]);
      })
  );
  cy.log('Supported product names asserted successfully');
  
 
    
  });



  
  
    }
)
