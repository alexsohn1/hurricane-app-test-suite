const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Added reporter for headless tests
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: 'https://sure-qa-challenge.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
