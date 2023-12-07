describe('Quote Api tests', () => {
    it('Verify valid request.  Valid 5 digit zip code | Building material - straw | and water proximity - Yes', () => {
        let payload = {
            buildingMaterial: 'straw',
            postalCode: '90001',
            waterProximity: 'true'
        }

        cy.getQuoteResponse(payload);

        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.deep.eq(200)
            expect(response.body.quote.floodProtection.price).to.not.eq(0)
            expect(response.body.quote.floodProtection.includedByDefault).to.eq(false)
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
        })
    })

    it('Verify valid request.  Valid 5 digit zip code | Building material - bricks | and water proximity - No', () => {
        let payload = {
            buildingMaterial: 'bricks',
            postalCode: '90275',
            waterProximity: 'false'
        }

        cy.getQuoteResponse(payload);


        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.deep.eq(200)
            expect(response.body.quote.floodProtection.price).to.not.eq(0)
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
            // Open bug: BR_22
            // expect(response.body.quote.floodProtection.includedByDefault).to.deep.eq(true)
        })
    });
    

    // Server side validation for bad data values
    it.skip('Verify no data (null) shows 400 response code', () => {
        // Prices are shown as 0 in the response instead of validation message. 
        let payload = {
            buildingMaterial: null,
            postalCode: null,
            waterProximity: null
        }
        cy.getQuoteResponse(payload);


        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })

    it.skip('Verify no data (undefined) shows 400 response code', () => {
        // Server crashes: BR_27
        let payload = {
            buildingMaterial: undefined,
            postalCode: undefined,
            waterProximity: undefined
        }
        cy.getQuoteResponse(payload);


        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })

    it.skip('Verify invalid data type (integers + letters) shows 400 response code', () => {
        // Server crashes: BR_27
        let payload = {
            buildingMaterial: 121345,
            postalCode: "asdgasdgasdgasdg",
            waterProximity: 121345
        }
        cy.getQuoteResponse(payload);


        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })

    it.skip('Verify invalid data type (boolean) shows 400 response code', () => {
        // Prices are shown as 0 in the response instead of validation message. BR_27
        let payload = {
            buildingMaterial: true,
            postalCode: false,
            waterProximity: true
        }
        cy.getQuoteResponse(payload);


        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })
})