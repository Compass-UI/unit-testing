# Angular Unit Testing

## Download Jasmine

`gemini-david 🌴 : curl -L -O https://github.com/jasmine/jasmine/releases/download/v3.1.0/jasmine-standalone-3.1.0.zip`

## Install Karma

[https://karma-runner.github.io/2.0/index.html](https://karma-runner.github.io/2.0/index.html)

`gemini-david 🌴 : npm i karma -D`

`npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev`

`npm install -g karma-cli`

`gemini-david 🌴 : npm install karma-jasmine karma-chrome-launcher -D`

## Start Karma configuration

`gemini-david 🌴 : karma init`

## Running Unit Tests using Karma

`gemini-david 🌴 : karma start karma.conf.js`

## Install Karma launchers for each browser you wish to use

E.g. for PhantomJS:

`https://www.npmjs.com/package/karma-phantomjs-launcher`

`gemini-david 🌴 : npm install --save-dev karma-phantomjs-launcher`

## Testing Angular 
[https://docs.angularjs.org/guide/unit-testing](https://docs.angularjs.org/guide/unit-testing)

### Install ngMock

[https://docs.angularjs.org/api/ngMock](https://docs.angularjs.org/api/ngMock)

`npm install angular -S`
`npm install angular-mocks -D`