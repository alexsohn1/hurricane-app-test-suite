class QuotePage {

    url = '/quote';

    elements = {
        pageHeader: () => cy.contains('Your available plans'),
        includeFloodProtectionCheckbox: () => cy.getBySel('price_FloodProtection'),
        includeFloodProtectionText: () => cy.contains('Include Flood Protection'),
        floodProtectionIncludedText: () => cy.contains('Flood Protection Included'),
        selectedCheckbox: () =>  cy.get('.Mui-checked'),
        priceTexts: () => cy.get('..MuiTypography-root.MuiTypography-h3.MuiTypography-alignCenter')
    }

    checkIncludeFloodProtectionOption() {
        this.elements.includeFloodProtectionCheckbox().click()
    }
}

export default new QuotePage();