import BuildingMaterialPage from '../pages/BuildingMaterialPage';
import LandingPage from '../pages/LandingPage';
import WaterProximityPage from '../pages/WaterProximityPage';

describe("Building Materials", () => {

    beforeEach(() => {
        cy.visit('/');
        LandingPage
            .enterZipCode(90275)
            .clickGetQuoteButton();
    });

    it('When the user enters a valid 5 digit zip-code and submits the form, the user should be navigated to the Building Material question page', () => {
        cy.url().should('contain', BuildingMaterialPage.url);

        BuildingMaterialPage
            .elements
            .header()
            .should('be.visible');
    });
    
    it('No options should be selected and the Next button should be disabled by default', () => {
        BuildingMaterialPage
            .elements
            .selectedOption()
            .should('not.exist');

        BuildingMaterialPage
            .elements
            .nextButton()
            .should('be.disabled');
    });

})