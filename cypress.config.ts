import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: 'https://cfry2.github.io/actions-example'
  },
});
