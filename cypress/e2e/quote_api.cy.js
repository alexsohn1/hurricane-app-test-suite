describe('Quote Api tests', () => {
    it('Verify valid request.  Valid 5 digit zipcode | Buildling material - straw | and water proximity - Yes', () => {
        let payload = {
            buildingMaterial: 'straw',
            postalCode: '90001',
            waterProximity: 'true'
        }

        cy.getQuoteResponse(payload);

        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quote.floodProtection.price).to.not.eq(0)
            expect(response.body.quote.floodProtection.includedByDefault).to.eq(false)
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
        })
    })

    it('Verify valid request.  Valid 5 digit zipcode | Buildling material - bricks | and water proximity - No', () => {
        let payload = {
            buildingMaterial: 'bricks',
            postalCode: '90275',
            waterProximity: 'false'
        }

        cy.getQuoteResponse(payload);


        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quote.floodProtection.price).to.not.eq(0)
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
            // Open bug: BR_22
            expect(response.body.quote.floodProtection.includedByDefault).to.deep.eq(true)
        })
    });

    // Server side validation for bad data values.  Suggested in BR_07 to add server side validations to quote api

    it.skip('Verify no data (null) shows correct response', () => {
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

    it.skip('Verify no data (undefined) shows correct response', () => {
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

    it.skip('Verify invalid data type (numbers) shows correct response', () => {
        let payload = {
            buildingMaterial: 121345,
                postalCode: 121345,
                waterProximity: 121345
        }
        cy.getQuoteResponse(payload);
        
        
        cy.get('@quoteResponse').then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })

    it.skip('Verify invalid data type (boolean) shows correct response', () => {
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