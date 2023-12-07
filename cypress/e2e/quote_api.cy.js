describe('Quote Api tests', () => {
    it('Verify valid request.  Valid 5 digit zipcode | Buildling material - straw | and water proximity - Yes', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: 'straw',
                postalCode: '90001',
                waterProximity: 'true'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200) 
            expect(response.body.quote.floodProtection.price).to.not.eq(0) 
            expect(response.body.quote.floodProtection.includedByDefault).to.eq(false) 
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
        })
    })

    it('Verify valid request.  Valid 5 digit zipcode | Buildling material - bricks | and water proximity - No', () => {
        // Open bug: BR_22
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: 'bricks',
                postalCode: '90275',
                waterProximity: 'false'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200) 
            expect(response.body.quote.floodProtection.price).to.not.eq(0)
            expect(response.body.quote.floodProtection.includedByDefault).to.deep.eq(true) 
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
        })
    });

    // Server side validation for bad data values.  Suggested in BR_07 to add server side validations to quote api

    it('Verify no data (null) shows correct response', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: null,
                postalCode: null,
                waterProximity: null
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })

    it('Verify no data (undefined) shows correct response', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: undefined,
                postalCode: undefined,
                waterProximity: undefined
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })

    it('Verify invalid data type (numbers) shows correct response', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: 213124,
                postalCode:  12314,
                waterProximity: 3452345
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })

    it('Verify invalid data type (boolean) shows correct response', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: false,
                postalCode:  true,
                waterProximity: false
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.deep.eq(400);
        })
    })
})