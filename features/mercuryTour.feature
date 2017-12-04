
Feature: Book Flight from Mercury Tour

Scenario Outline: Book Flight

  Given I open Mercury Tour page
  When I login to Mercury using <userName> and <password>
  Then Page titile is "Find a Flight: Mercury Tours:"
  When Search flights from <fromPort> to <toPort>
  Then Page titile is "Select a Flight: Mercury Tours"
  When Reserve flight
  Then Page titile is "Book a Flight: Mercury Tours"
  When Confirm flight using first name as <firstName>, last name as <lastName> and credit card number as <creditNumber>
  Then The flight is booked successfully

  Examples:
  |userName|password|fromPort|toPort|firstName|lastName|creditNumber|
  |mercury|mercury|Sydney|London|ivan|xue|123456|
  |mercury|mercury|London|Paris|ivan|xue|123456|
