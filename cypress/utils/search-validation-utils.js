export class ValidationUtils {

    constructor(page) {
      this.page = page
    }

    validateNumberOfVisibleBooks(expectedCount) {
        this.page.getVisibleBooks().should('have.length', expectedCount, `There should be exactly ${expectedCount} book(s) visible`)
    }

    validateTitleIsVisible(title) {
       this.page.getVisibleBooks().within( ()=>{ 
            cy.get('h2').should('contain.text', title, `${title} should be visible`)
        })
    }
}