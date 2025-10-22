
Feature: Login functionality
@regression

  Scenario: Valid user login
    Given user navigates to login page
    When user logs in with "prakashreddy404@gmail.com" and "Czadgjl12@n^^"
    Then user should see the dashboard
    And last_login should be updated in the database

 Scenario: Valid users login
    Given user navigates to login page
    When user logs in with "prakashreddy404@gmail.com" and "Czadgjl12@n^^"
    Then user should see the dashboard
    And last_login should be updated in the database
