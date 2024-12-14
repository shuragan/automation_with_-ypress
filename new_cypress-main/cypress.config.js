const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    blockHosts: ["*mc.yandex.ru"],
    baseUrl:"http://shop.bugred.ru/user/login/index"
  },
});

// Все параметры конфига: https://docs.cypress.io/guides/references/configuration
