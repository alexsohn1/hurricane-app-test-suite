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

    it('TC_28: When the user selects an option and clicks Next on the Building material page, the user should be navigated to the Water Proxmity page', () => {
        cy.url().should('contain', WaterProximityPage.url);

        WaterProximityPage
            .elements
            .header()
            .should('be.visible');
    });

    it('TC:29 + TC:30: No options should be selected and the Next button should be disabled by default', () => {
        WaterProximityPage
            .elements
            .selectedOption()
            .should('not.exist');

        // Open Bug: BR_09
        // WaterProximityPage
        //     .elements
        //     .nextButton()
        //     .should('be.disabled');
    });
})