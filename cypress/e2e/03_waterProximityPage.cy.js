import LandingPage from '../pages/LandingPage';
import BuildingMaterialPage from '../pages/BuildingMaterialPage';
import WaterProximityPage from '../pages/WaterProximityPage';

describe('Water proximity page tests', () => {

    beforeEach(() => {
        LandingPage
            .enterZipCode(90275)
            .clickGetQuoteButton();
            
        BuildingMaterialPage
            .selectBuildingMaterial('Straw')
            .clickNext()
    })

    it('When the user selects an option and clicks Next on the Water Proximity page, the user should be navigated to the Quote page', () => {
        cy.url().should('contain', WaterProximityPage.url);

        WaterProximityPage
            .elements
            .header()
            .should('be.visible');
    });

    it('No options should be selected and the Next button should be disabled by default', () => {
        WaterProximityPage
            .elements
            .selectedOption()
            .should('not.exist');

            WaterProximityPage
            .elements
            .nextButton()
            .should('be.disabled');
    });
})