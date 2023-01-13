
import './commands'
// usado para evitar os cookies
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
// The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = "cookie_notice";  // no "" colocar o cookie do site
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = "ACCEPTED"; 

Cypress.on("window:before:load", window => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});

