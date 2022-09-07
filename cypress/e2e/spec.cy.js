describe('Main Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should show existing trick cards when the user visits the app', () => {
    cy.contains('Sick Trick Wish List')
      .intercept('GET', 'http://localhost:3001/api/v1/tricks', {
        statusCode: 201
      })
      .get('.1').should('contain', 'treflip')
      .get('.2').should('contain', 'heelflip')
      .get('.3').should('contain', 'frontside 50-50, backside 180 out')
  })

  it('Should show form to add a new trick', () => {
    cy.contains('Sick Trick Wish List')
      .get('.form').should('contain', 'Choose your Stance')
      .get('input').invoke('attr', 'placeholder').should('contain', 'Name of Trick')
      .get('.form').should('contain', 'Choose your Obstacle')
      .get('button').should('contain', 'Send It!')
  })

  it('should be able to select all form inputs and fill them with the corresponding values', () => {
    cy.get('select[id="stance"]')
      .select('regular')
      .should('have.value', 'regular')
      .get('input[name="name"]')
      .type('kickflip')
      .should('have.value', 'kickflip')
      .get('select[id="obstacle"]')
      .select('pool')
      .should('have.value', 'pool')
      .get('input[name="tutorial"]')
      .type('https://www.youtube.com/watch?v=Zebs7JZ2PW0')
      .should('have.value', 'https://www.youtube.com/watch?v=Zebs7JZ2PW0')
  })

  it('should click the Send It button to display a new trick card with information entered from the form', () => {
      cy.get('select[id="stance"]')
      .select('regular')
      .get('input[name="name"]')
      .type('kickflip')
      .get('select[id="obstacle"]')
      .select('pool')
      .get('input[name="tutorial"]')
      .type('https://www.youtube.com/watch?v=Zebs7JZ2PW0')
      .get('button').click()
      .get('p').should('contain', 'kickflip')
      .get('p').should('contain', 'https://www.youtube.com/watch?v=Zebs7JZ2PW0')
  })
 
})