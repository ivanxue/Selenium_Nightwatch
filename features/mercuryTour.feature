
Feature: Book Flight from Mercury Tour

Scenario: Book Flight from Sydney to London

  Given I open Mercury Tour page
  When I login to Mercury using "mercury" and "mercury"
  Then Page titile is "Find a Flight: Mercury Tours:"
  When Search flights from "Sydney" to "London"
  Then Page titile is "Select a Flight: Mercury Tours"
  When Reserve flight
  Then Page titile is "Book a Flight: Mercury Tours"
  When Confirm flight using first name as "ivan", last name as "xue" and credit card number as "123"
  Then The flight is booked successfully