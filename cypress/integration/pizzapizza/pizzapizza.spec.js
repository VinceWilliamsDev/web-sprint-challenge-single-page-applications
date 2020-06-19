describe('can I add text to the box?', () => {
    it('put text in the box', () => {
        cy.visit('http://localhost:3000/order')
        cy.get('input[name=instructions]')
            .type('this is text')
            .should('have.value', 'this is text')
    })
})


describe('can I select multiple toppings?', () => {
    it('select multiple toppings', ()=> {
        cy.visit('http://localhost:3000/order')
        cy.get('input[name=pepperoni]').click().should('be.checked')
        cy.get('input[name=sausage]').click().should('be.checked')
    })
})

describe('can I submit the form?', () => {
    it('submit the form', () => {
        cy.get('input[name=pepperoni]').click()
        cy.get('input[name=sausage]').click()
        cy.visit('http://localhost:3000/order')
        cy.get('button#submit').click()
        cy.get('input[name=pepperoni]').should('not.be.checked')
        cy.get('input[name=sausage]').should('not.be.checked')
    })
})