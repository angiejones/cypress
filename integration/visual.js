import { SearchPage } from '../page-objects/search-page'
import { ValidationUtils } from '../utils/search-validation-utils'

describe('Search for books', () => {
    const page = new SearchPage()
    const validator = new ValidationUtils(page)

    beforeEach( () => {
        page.navigate() 
        cy.eyesOpen({
            appName: 'Automation Bookstore', 
            batchName: 'Cypress: Bookstore Search Jan 4',
            browser: [ {name: 'chrome', width: 1024, height: 768} ]
        })
    })

    afterEach(() => cy.eyesClose())

    it('should return one book with title Agile Testing', () => {
        page.search('Agile Testing', true)
       cy.eyesCheckWindow()
    })

    it('should return multiple books with title Test', () => {
        page.search('Test', true)
        cy.eyesCheckWindow()
    })
})