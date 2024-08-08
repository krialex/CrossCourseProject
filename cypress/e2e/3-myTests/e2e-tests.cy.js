describe('Add to Cart Button', () => {
    beforeEach(() => {
      // Bruk base URL og legg til spesifikke deler som trengs
      cy.visit('http://127.0.0.1:5501/thecoate.html?id=17'); // Eksempel med spesifikk ID
    });
  
    it('should update cart number when button is clicked', () => {
      cy.get('#cartNumber').should('contain', '0');
      cy.get('.chart_button').click();
      cy.get('#cartNumber').should('contain', '1');
      cy.get('.chart_button').click();
      cy.get('#cartNumber').should('contain', '2');
    });
  });
  

  describe('Delete item from chart', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/shoppingcart.html');
    });
    
    it('should delete an item from the cart and display the appropiate message', () => {
        //First check if the elements are visible before deleting
        cy.get('#trashCan').should('be.visible');
        cy.get('.chart').should('be.visible');
        cy.get('.how-much').should('not.contain', '0kr');
        //cy.get('.pay').should('not.contain', '0kr'); denne er hardkodet og dermed kan den ikke sjekke dette..
        cy.get('.delete-item').should('not.contain', 'There are no products in your shopping cart');

        //Click on the delete button
        cy.get('#trashCan').click();

        //Check if the delete button is hidden
        cy.get('#trashCan').should('not.be.visible');

        //Check  that element in chart is hidden
        cy.get('.chart').should('not.be.visible');

        //Check that price and total price is set to "0kr"
        cy.get('.how-much').should('contain', '0kr');
        cy.get('.pay').should('contain', '0kr');

        //Check that message that chart is empty is shown
        cy.get('.delete-item').should('contain', 'There are no products in your shopping cart');
    })
  })

  describe('Validate contact form', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/contact.html');
    });

    it('should display error messages for invalid inputs', () => {
        // Prøv å sende inn skjemaet uten å fylle ut noen felt
        cy.get('button.pay_button').click();
    
        // Kontroller at feilmeldingene vises
        cy.get('#name-error').should('be.visible');
        cy.get('#email-error').should('be.visible');
        cy.get('#message-error').should('be.visible');
      });

      it('should display error messages for partially invalid inputs', () => {
        // Fyll ut navn feltet med mindre enn 2 tegn
        cy.get('#name').type('A');
        // Fyll ut e-post feltet med en ugyldig e-postadresse
        cy.get('#email').type('invalidemail');
        // Fyll ut meldingsfeltet med mindre enn 10 tegn
        cy.get('#message').type('short');
    
        // Prøv å sende inn skjemaet
        cy.get('button.pay_button').click();
    
        // Kontroller at feilmeldingene vises
        cy.get('#name-error').should('be.visible');
        cy.get('#email-error').should('be.visible');
        cy.get('#message-error').should('be.visible');
      });

      it('should display success message for valid inputs', () => {
        // Fyll ut navn feltet med gyldige data
        cy.get('#name').type('John Doe');
        // Fyll ut e-post feltet med en gyldig e-postadresse
        cy.get('#email').type('john.doe@example.com');
        // Fyll ut meldingsfeltet med gyldige data
        cy.get('#message').type('This is a valid message with more than 10 characters.');
    
        // Prøv å sende inn skjemaet
        cy.get('button.pay_button').click();
    
        // Kontroller at feilmeldingene ikke vises
        cy.get('#name-error').should('not.be.visible');
        cy.get('#email-error').should('not.be.visible');
        cy.get('#message-error').should('not.be.visible');
    
        // Kontroller at suksessmeldingen vises
        cy.get('.suc-message').should('contain', 'Your message has been sendt');
      });
  })


