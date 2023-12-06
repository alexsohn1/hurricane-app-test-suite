import LandingPage from '../pages/LandingPage';
import BuildingMaterialPage from '../pages/BuildingMaterialPage';
import WaterProximityPage from '../pages/WaterProximityPage';
import QuotePage from '../pages/QuotePage';

describe('Quote page tests', () => {

    beforeEach(() => {
        LandingPage
            .enterZipCode(90275)
            .clickGetQuoteButton();
        BuildingMaterialPage
            .selectBuildingMaterial('Straw')
            .clickNext()

        cy.intercept('POST', '/api/quote').as('quotes');
    })


    it('TC40: When the user selects an option on the Water Proximity page, the user should be navigated to the Quotes page and both Standard and Complete plans with Choose buttons should be shown', () => {

        WaterProximityPage
            .selectYesOption()
            .clickNext();

        cy.url().should('contain', QuotePage.url);

        QuotePage
            .elements
            .header()
            .should('be.visible')

        cy.wait('@quotes').its('response.statusCode').should('equal', 200);

        QuotePage
            .elements
            .standardPlanCard()
            .should('be.visible');
        
        
        QuotePage
            .elements
            .chooseStandardButton()
            .should('be.visible');

        QuotePage
            .elements
            .completePlanCard()
            .should('be.visible');
            
        QuotePage
            .elements
            .chooseCompleteButton()
            .should('be.visible');


    });
    

    it('When the user selects Yes option on the Water Proximity page, the Include Flood Protection text should be shown and unchecked by default', () => {

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
    

    it('When the user selects No option on the Water Proximity page, the Flood Protection Included text should be shown and checkbox should be selected by default', () => {
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

    it('Correct prices should be shown for each plan', () => {
        WaterProximityPage
            .selectNoOption()
            .clickNext();

        cy.wait('@quotes').its('response.statusCode').should('equal', 200);
        
        cy.get('@quotes').then(json => {
            let completePlanPrice = json.response.body.quote.plans.complete.price;
            let standardPlanPrice = json.response.body.quote.plans.standard.price;
            let floodProtectionPrice = json.response.body.quote.floodProtection.price;


            console.log(completePlanPrice);
            console.log(standardPlanPrice);
            console.log(floodProtectionPrice);

            QuotePage
                .elements
                .standardPriceText()
                .should('have.text', `$${standardPlanPrice}`);

            QuotePage
                .elements
                .completePriceText()
                .should('have.text', `$${completePlanPrice}`);

            QuotePage
                .elements
                .includeFloodProtectionText()
                .should('contain', `(+$${floodProtectionPrice})`);
        });

       
    });
})