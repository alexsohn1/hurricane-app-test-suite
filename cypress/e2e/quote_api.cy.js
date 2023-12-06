describe('Quote Api tests', () => {
    it('Verify valid request.  Valid 5 digit zipcode | Buildling material - straw | and water proximity - Yes', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: 'straw',
                postalCode: '91007',
                waterProximity: 'true'
            }
        }).then((response) => {
            expect(response.status).to.eq(200) 
            expect(response.body.quote.floodProtection.price).to.not.eq(0) 
            expect(response.body.quote.floodProtection.includedByDefault).to.eq(false) 
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
        })
    })

    it('Verify valid request.  Valid 5 digit zipcode | Buildling material - straw | and water proximity - No', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: 'straw',
                postalCode: '91007',
                waterProximity: 'false'
            }
        }).then((response) => {
            expect(response.status).to.eq(200) 
            expect(response.body.quote.floodProtection.price).to.not.eq(0)
            expect(response.body.quote.floodProtection.includedByDefault).to.eq(true) 
            expect(response.body.quote.plans.complete.price).to.not.eq(0)
            expect(response.body.quote.plans.standard.price).to.not.eq(0)
        })
    })

    it('Verify no data shows correct response', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: null,
                postalCode: null,
                waterProximity: null
            }
        }).then((response) => {
            expect(response.status).to.eq(400);
        })
    })

    it('Verify invalid zipcode data type', () => {
        cy.request({
            url: '/api/quote',
            method: 'POST',
            body: {
                buildingMaterial: "bricks",
                postalCode:  "234234adgasdga@#@$",
                waterProximity: "false"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
        })
    })
})