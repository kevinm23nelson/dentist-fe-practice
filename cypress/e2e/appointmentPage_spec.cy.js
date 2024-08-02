describe('API Calls', () => {
  beforeEach(() => {
    cy.setupIntercepts()
    cy.visit("http://localhost:3000")
  })

  it('should fetch from fixture', () => {
    cy.get('.appointments-container')
      .get('.appointment-card').should('have.length', 2)
      .get('.appointment-card').first().should('contain.text', "Spot")
      .get('.appointment-card').last().should('contain.text', "Ducky")
  })

  it('should post a new appointment', () => {
    cy.get('.appointments-container')
    cy.get('input[name="pet"]').type('Patrice')
    cy.get('input[name="date"]').type('New Date')
    cy.get('input[name="time"]').type('New Time')
    cy.get('button').contains('SUBMIT').click()

    cy.wait('@postAppointment')
    cy.get('.appointments-container')
      .get('.appointment-card').should('have.length', 3)
      .get('.appointment-card').last().should('contain.text', "Patrice").and('contain.text', "June 4").and('contain.text', "11:45")
  })
})