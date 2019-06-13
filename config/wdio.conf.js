const chai = require('chai');

exports.config = {

    baseUrl: 'http://www.google.com',
    specs: ['./tests/specs/*.spec.js'],
    logLevel: 'trace',
    outputDir: './logs',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results/',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    screenshotPath: './reports/screenshots',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 100000,
    },
    services: ['selenium-standalone'],
    runner: 'local',
    capabilities: [
        {
           browserName: 'chrome',
        }, {
            browserName: 'firefox',
            "moz:firefoxOptions": {
                binary: 'C:/Users/XXXXXX/AppData/Local/Mozilla Firefox/firefox.exe',
            },
            },
    ],

    before: function() {
        global.expect = chai.expect;
    },

    beforeSession: function(config, capabilities, specs) {
        require('@babel/register');
    }
};
