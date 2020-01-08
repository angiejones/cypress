import { SearchPage } from '../page-objects/search-page'
import { ValidationUtils } from '../utils/search-validation-utils'

describe('Search for books', () => {
    const page = new SearchPage()
    const validator = new ValidationUtils(page)

    beforeEach( () => {
        page.navigate()
    })

    it('should return one book with title Agile Testing', () => {
        const title = 'Agile Testing'
        page.search(title)
        validator.validateNumberOfVisibleBooks(1)
        validator.validateTitleIsVisible(title)
    })

    it('should return multiple books with title Test', () => {
        const query = 'Test'
        const expectedBooks = [
            'Test Automation in the Real World', 
            'Experiences of Test Automation', 
            'Agile Testing', 
            'How Google Tests Software', 
            'Java For Testers']
        page.search(query)
        validator.validateNumberOfVisibleBooks(expectedBooks.length)
        expectedBooks.forEach(b => validator.validateTitleIsVisible(b))
    })
})