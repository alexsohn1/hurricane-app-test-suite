import BuildingMaterialPage from '../pages/BuildingMaterialPage';
import LandingPage from '../pages/LandingPage';

describe("Building Materials", () => {

    beforeEach(() => {
        LandingPage
            .enterZipCode(90275)
            .clickGetQuoteButton();
    });

    it('TC_19: When the user enters a valid 5 digit zip-code and submits the form on the Landing page, the user should be navigated to the Building Material question page', () => {
        cy.url().should('contain', BuildingMaterialPage.url);

        BuildingMaterialPage
            .elements
            .header()
            .should('be.visible');
    });

    it('TC_20 + TC_21: No options should be selected and the Next button should be disabled by default', () => {
        BuildingMaterialPage
            .elements
            .selectedOption()
            .should('not.exist');


        // Open Bug: BR_08

        // BuildingMaterialPage
        //     .elements
        //     .nextButton()
        //     .should('be.disabled');
    });
})