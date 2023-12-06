class QuotePage {

    url = '/quote';

    elements = {
        header: () => cy.contains('Your available plans'),
        includeFloodProtectionCheckbox: () => cy.getBySel('price_FloodProtection'),
        includeFloodProtectionText: () => cy.contains('Include Flood Protection'),
        floodProtectionIncludedText: () => cy.contains('Flood Protection Included'),
        selectedCheckbox: () =>  cy.get('.Mui-checked'),
        standardPlanCard: () => cy.contains('Standard').parentsUntil('.MuiPaper-rounded'),
        standardPriceText: () => cy.getBySel('price_Standard'),
        chooseStandardButton: () => cy.contains('Choose Standard'),
        completePlanCard: () => cy.contains('Complete').parentsUntil('.MuiPaper-rounded'),
        completePriceText: () => cy.getBySel('price_Complete'),
        chooseCompleteButton: () => cy.contains('Choose Complete'),
    }

    checkIncludeFloodProtectionOption() {
        this.elements.includeFloodProtectionCheckbox().click()
    }
}

export default new QuotePage();