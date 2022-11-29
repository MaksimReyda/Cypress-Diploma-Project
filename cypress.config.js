const { defineConfig } = require("cypress");

let orderDetails

module.exports = defineConfig({
  projectId: 'puurqj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        setOrderDetails: (order) => {
          return (orderDetails = order)
        },

        getOrderDetails: () => {
          return orderDetails
        }
      })
    },
  },
  video: false,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,
  viewportWidth: 1500
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results/mochawesome',
  //   overwrite: false,
  //   html: false,
  //   json: true
  // }
});
