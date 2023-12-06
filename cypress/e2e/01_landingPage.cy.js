import LandingPage from '../pages/LandingPage';

describe("Landing page", () => {
    it('Required error message is shown when user submits a blank zip code', () => {
        LandingPage
            .clickGetQuoteButton()
            .elements
            .errorMessage()
            .should('be.visible').and('have.text', 'Required');
    })

    it('Invalid zip code error message is shown when user submits < 5 digit zip code', () => {
    LandingPage
        .enterZipCode('1234')
        .clickGetQuoteButton()
        .elements
        .errorMessage()
        .should('be.visible')
        .and('have.text', 'Invalid zip code')
    })

    it('Invalid zip code error message is shown when user submits > 5 digit zip code', () => {
    LandingPage
        .enterZipCode('123456')
        .clickGetQuoteButton()
        .elements
        .errorMessage()
        .should('be.visible')
        .and('have.text', 'Invalid zip code')
    })

    it('Verify the "Invalid zip code" validation message is shown when the user enters letters, special characters AND integers w/ 5 characters and submits the form', () => {
    LandingPage
        .enterZipCode('gg&r4')
        .clickGetQuoteButton()
        .elements
        .errorMessage()
        .should('be.visible')
        .and('have.text', 'Invalid zip code');
    })

})