class WaterProximityPage {
    url = '/water-proximity';

    elements = {
        header: () => cy.contains('Is your home located within 1 mile of a body of water?'),
        yesOption: () => cy.get('input[value=true]'),
        noOption: () => cy.get('input[value=false'),
        selectedOption: () => cy.get('.Mui-checked'),
        nextButton: () => cy.contains('Next')
    }

    selectYesOption() {
       this.elements.yesOption().click() 
       return this;
    }

    selectNoOption() {
        this.elements.noOption().click();
        return this;
    }

    clickNext() {
        this.elements.nextButton().click()
        return this
    }
}

export default new WaterProximityPage();