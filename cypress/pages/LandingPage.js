class LandingPage {

    elements = {
        header: () => cy.contains('Hurricane Insurance'),
        zipCodeField: () => cy.get(`input[name='postalCode']`),
        getQuoteButton: () => cy.contains('Get a quote'),
        requiredError: () => cy.get('.MuiFormHelperText-root.Mui-error'),
        invalidZipError: () => cy.get('.MuiFormHelperText-root.Mui-error.MuiFormHelperText-filled')

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