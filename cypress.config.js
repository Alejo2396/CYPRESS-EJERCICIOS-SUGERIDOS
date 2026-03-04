const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: false,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {},
  },
});