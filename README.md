
**This is the automation test project based on [nightwatch.js](http://nightwatchjs.org/).**

Basically it implements all the test cases in the Squiz Workplace Functional Test Checklist (Microsoft Word document provided at the root level of the repository).

Now it supports Chrome, Firefox, Safari, IE11 and Microsoft Edge on Windows, macOS and Linux.

## Install

```npm install``` or ```yarn install```

## Usage: Console commands

```npm test```

Run test cases in the default browser (Chrome by default)

```npm clean```

Clean the report folder at the root level

```npm run nightwatch -- -e browserNames```

Run test cases in the specified browser. For example,

```npm run nightwatch -- -e firefox```

will run tests in Firefox. And

```npm run nightwatch -- -e chrome,firefox,safari```

will run tests in Chrome, Firefox and Safari simontaneously. The supported browser names include: chrome, firefox, safari, ie, edge.

## Tips for Developers

1. Keyboard manipulation: please use setValue() in Firefox and IE and keys for the other browsers. Browser type could be detected by client.capabilities.browserName.
