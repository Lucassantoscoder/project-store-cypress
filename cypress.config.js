const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
      defaultCommandTimeout: 6000,  // time out da aplicação.
      chromeWebSecurity: false,  //navegadores restringem o acesso, precisa manter false para usar. 
      viewportWidth: 1280,  // tamanho da tela
      viewportHeight: 720,
  reporterOptions: {
      reportDir: "cypress\downloads", // local pra onde ira relatorio
      overwrite: true,
      html: true,
      json: false,
      reporter: "mochawesome"  
    },
  },
}) 

  