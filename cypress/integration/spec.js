/// <reference types="cypress" />

before(() => {
  expect(Cypress.env('launchDarklyApiAvailable'), 'LaunchDarkly').to.be.true
})

const featureFlagKey = 'testing-launch-darkly-control-from-cypress'
const userId = 'USER_1234'

it.only('shows the casual greeting', () => {
  // target the given user to receive the first variation of the feature flag
  cy.task('cypress-ld-control:setFeatureFlagForUser', {
    featureFlagKey,
    userId: 'string user id',
    variationIndex: 0,
  })
  cy.visit('/')
})

it('shows formal greeting')

it('shows vacation greeting')
