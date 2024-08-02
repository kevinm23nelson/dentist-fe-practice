Cypress.Commands.add('setupIntercepts', () => {
    cy.intercept('GET', 'http://localhost:3001/appointments', {
        statusCode: 200,
        fixture: 'appointments.json'
    }).as('getAppointments')

    cy.intercept('POST', 'http://localhost:3001/appointments', {
        statusCode: 201,
        fixture: 'postAppointment.json'
    }).as('postAppointment')
})