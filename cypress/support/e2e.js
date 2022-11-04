import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('The user agent does not support public key credentials')){
    return false;
  }
})
