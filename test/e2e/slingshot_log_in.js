var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
    '@tags': ['slingshot_login'],
    'Ketan slingshot log in test': function(browser) {
        browser
            .url('https://demo.slingshothealth.com/app/login')
            .waitForElementVisible('body')
            .assert.title('Slingshot Health')//assert title of the login page
            .assert.visible('button[type=submit]')//assert if the button is visible
            .setValue('input[type=text]', 'gastro@dokbid.com')//enters user name
            .setValue('input[type=password]', 'Test1234')//enters password
            .click('button[type=submit]')//clicks log_in
            .saveScreenshot('./reports/before_login_result.png')//takes a snap shot of the screen and stores it in the reports folder
            .waitForElementVisible('html body.view-login div#root div div.container div.container.white-background div h1.text-center.md-pb-30')
            .assert.containsText('html body.view-login div#root div div.container div.container.white-background div h1.text-center.md-pb-30','Request an appointment')// asserts "request an appointment" page
            .saveScreenshot('./reports/login_result.png')//takes a snap shot of the screen and stores it in the reports folder
            .click('html body.view-login div#root div div.navigation div.right-menu button.btn.btn-link')// log_out from the website
            .waitForElementVisible('body')
            .saveScreenshot('./reports/logout_result.png')//takes a snap shot after "logging out" and stores it in the reports folder
            .waitForElementVisible('body')
            .assert.containsText('#root > div > div.container > div > div > div > div > div > h2','Login')//assert back to login page
            .end();
    }
};
