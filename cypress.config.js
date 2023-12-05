const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sure-qa-challenge.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
