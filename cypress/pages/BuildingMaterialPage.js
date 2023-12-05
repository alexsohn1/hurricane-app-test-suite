class BuildingMaterialPage {
    url = '/building-material';

    elements = {
        header: () => cy.contains('What type of material is your home constructed with?'),
        allOptions: () => cy.get('.MuiIconButton-label'),
        buildingMaterialOption: (option) => cy.get(`input[value=${option}]`),
        selectedOption: () => cy.get('.Mui-checked'),
        nextButton: () => cy.get('.MuiButton-label'),
    }

    selectBuildingMaterial(option) {
        this.elements.buildingMaterialOption(option.toLowerCase()).click()
        return this
    }

    selectAllOptions() {
        this.elements.allOptions().each((option) => {
            cy.wrap(option).click()
        })
        return this
    }

    clickNext() {
        this.elements.nextButton().click()
        return this
    }
}

export default new BuildingMaterialPage();