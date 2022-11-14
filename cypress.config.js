const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'puurqj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  screenshotOnRunFailure: true,
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results/mochawesome',
  //   overwrite: false,
  //   html: false,
  //   json: true
  // }
});
