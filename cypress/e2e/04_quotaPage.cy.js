import LandingPage from '../pages/LandingPage';
import BuildingMaterialPage from '../pages/BuildingMaterialPage';
import WaterProximityPage from '../pages/WaterProximityPage';
import QuotePage from '../pages/QuotePage';

describe('Water proximity page tests', () => {

    beforeEach(() => {
        cy.visit('/');
        LandingPage
            .enterZipCode(90275)
            .clickGetQuoteButton();
        BuildingMaterialPage
            .selectBuildingMaterial('Straw')
            .clickNext()

        cy.intercept('/api/quote').as('quotes');
    })

    it('TC40: When the user selects Yes option on the Water Proximity page, the Include Flood Protection text should be shown and unchecked by default', () => {

        WaterProximityPage
            .selectYesOption()
            .clickNext();

        cy.wait('@quotes').its('response.statusCode').should('equal', 200);

        QuotePage
            .elements
            .includeFloodProtectionText()
            .should('be.visible');


        QuotePage
            .elements
            .selectedCheckbox()
            .should('not.exist');
    });
    

    it('TC40: When the user selects No option on the Water Proximity page, the Flood Protection Included text should be shown and checkbox should be selected by default', () => {
        WaterProximityPage
            .selectNoOption()
            .clickNext();
        
        cy.wait('@quotes').its('response.statusCode').should('equal', 200);

        QuotePage
            .elements
            .floodProtectionIncludedText()
            .should('be.visible');

        QuotePage
            .elements
            .selectedCheckbox()
            .should('be.visible');
    });
})