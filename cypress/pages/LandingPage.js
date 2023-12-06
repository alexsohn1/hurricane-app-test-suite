class LandingPage {

    elements = {
        zipCodeField: () => cy.get(`input[name='postalCode']`),
        getQuoteButton: () => cy.contains('Get a quote'),
        errorMessage: () => cy.get('.MuiFormHelperText-root.Mui-error')

    }

    enterZipCode(zipCode) {
        this.elements.zipCodeField().type(zipCode)
        return this;
    }

    clickGetQuoteButton() {
        this.elements.getQuoteButton().click()
        return this;
    }

}

export default new LandingPage();