import LandingPage from '../pages/LandingPage';

describe("Landing page", () => {
    it('TC_12: The landing page should load', () => {
        LandingPage
            .elements
            .header()
            .should('be.visible');
    });

    it('TC_02: Required error message is shown when user submits a blank zip code', () => {
        LandingPage
            .clickGetQuoteButton()
            .elements
            .errorMessage()
            .should('be.visible').and('have.text', 'Required');
    })

    it('TC_03: Invalid zip code error message is shown when user submits < 5 digit zip code', () => {
    LandingPage
        .enterZipCode('1234')
        .clickGetQuoteButton()
        .elements
        .errorMessage()
        .should('be.visible')
        .and('have.text', 'Invalid zip code')
    })

    it.skip('TC_04: Invalid zip code error message is shown when user submits > 5 digit zip code', () => {

    // Open Bug: BR_02    
    LandingPage
        .enterZipCode('123456')
        .clickGetQuoteButton()
        .elements
        .errorMessage()
        .should('be.visible')
        .and('have.text', 'Invalid zip code')
    })

    it('TC_07: Verify the "Invalid zip code" validation message is shown when the user enters letters, special characters AND integers w/ 5 characters and submits the form', () => {
    LandingPage
        .enterZipCode('4g&r4')
        .clickGetQuoteButton()
        .elements
        .errorMessage()
        .should('be.visible')
        .and('have.text', 'Invalid zip code');
    })

})