/// <reference types="cypress" />

export class SearchPage {

     constructor() {
        this.url = 'https://automationbookstore.dev/'
        this.searchBar =  '#searchBar'
        this.visibleBooks = 'li:not(.ui-screen-hidden)'
        this.hiddenBooks = 'li.ui-screen-hidden'
    }

    navigate() {
        cy.visit(this.url) 
    }

    search(query) { 
       this.search(false)
    }

    search(query, expectBooksToHide){
        cy.get(this.searchBar).type(query)
        if(expectBooksToHide) {
            expect(cy.get(this.hiddenBooks).its('length')).to.not.equal(0)
        }
    }

    getVisibleBooks() {
        return cy.get(this.visibleBooks)
    }
}