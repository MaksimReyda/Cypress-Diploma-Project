/// <reference types="cypress" />


function generateEmail(){
  let today = new Date()
  let time = today.getTime()
  let newEmail = `test${time}@mail.com`
  console.log(time)
  return newEmail
}

function generateAccountName(){
  let today = new Date()
  let time = today.getTime()
  let accountName = `User${time}`
  console.log(time)
  return accountName
}

const locators = {
  logOrReg: '#customer_menu_top > li > a',
  continueBtn: '#accountFrm > fieldset > .btn',
  firstNameInput: '#AccountFrm_firstname',
  lastNameInput: '#AccountFrm_lastname',
  emailinput: '#AccountFrm_email',
  addressInput: '#AccountFrm_address_1',
  cityInput: '#AccountFrm_city',
  regionInput: '#AccountFrm_zone_id',
  zipCodeInput: '#AccountFrm_postcode',
  loginNameInput: '#AccountFrm_loginname',
  passwordInput: '#AccountFrm_password',
  confirmPasswordInput: '#AccountFrm_confirm',
  subscribeRadioButton: '#AccountFrm_newsletter1',
  policyCheckBox: '#AccountFrm_agree',
  continueRegButton: '.col-md-2 > .btn',
  firstNameWorning: 'div:nth-of-type(1) > fieldset > div:nth-of-type(1) > .help-block',
  lastNameWorning: 'div:nth-of-type(1) > fieldset > div:nth-of-type(2) > .help-block',
  emailWorning: 'div:nth-of-type(1) > fieldset > div:nth-of-type(3) > .help-block',
  addressWorning: 'div:nth-of-type(2) > fieldset > div:nth-of-type(2) > .help-block',
  cityWorning: 'div:nth-of-type(2) > fieldset > div:nth-of-type(4) > .help-block',
  regionWorning: 'div:nth-of-type(2) > fieldset > div:nth-of-type(5) > .help-block',
  zipCodeWorning: 'div:nth-of-type(6) > .help-block',
  loginNameWorning: 'div:nth-of-type(3) > fieldset > div:nth-of-type(1) > .help-block',
  passwordWorning: 'div:nth-of-type(3) > fieldset > div:nth-of-type(2) > .help-block'
}

function checkWorningMessage(locator, message){
  cy.get(locator).then(function(worning){
    expect(worning.text()).contains(message)
  })
}

beforeEach(() => {
  cy.visit('https://automationteststore.com/')
  cy.get(locators.logOrReg).click()
})



describe('Registration positive scenario', () => {

  it('passes', () => {
    // cy.visit('https://automationteststore.com/')
    // cy.get('#customer_menu_top > li > a').click()

    cy.get(locators.continueBtn).click()
    cy.get(locators.firstNameInput).type('Test')
    cy.get(locators.lastNameInput).type('User')
    cy.get(locators.emailinput).type(generateEmail())
    cy.get(locators.addressInput).type('Test address 123')
    cy.get(locators.cityInput).type('Test city')

    cy.get(locators.regionInput).select(1)

    cy.get(locators.zipCodeInput).type('1233')
    cy.get(locators.loginNameInput).type(generateAccountName())
    cy.get(locators.passwordInput).type('Testzuum12!')
    cy.get(locators.confirmPasswordInput).type('Testzuum12!')

    cy.get(locators.subscribeRadioButton).click()

    cy.get(locators.policyCheckBox).check()
    cy.get(locators.continueRegButton).click()

    cy.get('.maintext').then(function(element){
      expect(element.text()).contains('Your Account Has Been Created!')
      console.log(element.text())
    })
  })


  it.only('Negative, leave all required field empty', () => {
    cy.get(locators.continueBtn).click()

    cy.get(locators.continueRegButton).click()

    cy.get('.alert').then(function(alert){
      expect(alert.text()).contains('Error: You must agree to the Privacy Policy!')
    })


    checkWorningMessage(locators.firstNameWorning, 'First Name')

    checkWorningMessage(locators.lastNameWorning, 'Last Name must be')

    checkWorningMessage(locators.emailWorning, 'Email Address does not')

    checkWorningMessage(locators.addressWorning, 'Address 1 must be')

    checkWorningMessage(locators.cityWorning, 'City must be')

    checkWorningMessage(locators.regionWorning, 'Please select a region / state!')

    checkWorningMessage(locators.zipCodeWorning, 'Zip/postal code must be')

    checkWorningMessage(locators.loginNameWorning, 'Login name must be alphanumeric')

    checkWorningMessage(locators.passwordWorning, 'Password must be between')
  })

})