const { client } = require("nightwatch-cucumber");
const { defineSupportCode } = require("cucumber");

defineSupportCode(({ BeforeAll, AfterAll }) => {
  BeforeAll(() => {
    client.timeouts("implicit", 10000).maximizeWindow();
  });

  AfterAll(() => {
    client.end();
  });
});
