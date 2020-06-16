module.exports = {

    before: function (nightwatch) {
        nightwatch.url('https://www.saplinglearning.com/ibiscms/login/');
    },

    after: function (nightwatch) {
        nightwatch.end();
    },

    'POC': function (nightwatch) {

        var data = require('../utils/data.json');
        const loginPage = nightwatch.page.loginPage();

        loginPage.setUsername(data.username)
            .setPassword(data.password).clickLogin()

        nightwatch.useXpath().click('//h4[contains(text(), "SAVISPARK")]')
            .waitForElementVisible('//h1[contains(text(), "SAVISPARK")]');

        nightwatch.click(`//span[contains(text(), "Santi's link")]`).
            useCss().waitForElementVisible('.initial-screen__button');

        nightwatch.click('.initial-screen__button')
            .click('[name="Goggles"]')
            .click('[name="Lab Coat"]')
            .click('[name="Gloves"]')

        nightwatch.useXpath()
            .expect.element('//button[contains(text(), "Skip Animation")]')
            .to.not.have.attribute('disabled')

        nightwatch.click('//button[contains(text(), "Skip Animation")]').useCss();

        nightwatch.pause(5000);
        nightwatch.assert.not.cssClassPresent("#Bench", "savi-dnd-target-occupied");

        nightwatch.click('[aria-label="50 mL beaker"]');
        nightwatch.pause(1000);
        nightwatch.sendKeys('[aria-label="50 mL beaker"]', nightwatch.Keys.SPACE);
        nightwatch.pause(1000);
        nightwatch.sendKeys('.Beaker50ml-dragging', nightwatch.Keys.TAB);
        nightwatch.pause(1000);

        nightwatch.click('#Bench');
        nightwatch.assert.cssClassPresent("#Bench", "savi-dnd-target-occupied");

        nightwatch.click('#materials-list');
        nightwatch.sendKeys('#materials-list', [nightwatch.Keys.SHIFT, nightwatch.Keys.ENTER]);

        nightwatch.sendKeys('[aria-label="water"]', nightwatch.Keys.SPACE);
        nightwatch.pause(2000);

        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);

        nightwatch.pause(2000);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.SPACE);
        nightwatch.pause(2000);

        nightwatch.useXpath().expect.element('//button[contains(text(), "Add")]')
            .to.have.attribute('disabled');

        nightwatch.useCss().getText('.lab-simulation-bodyText span', function (text) {
            const max = text.value.replace(/^\D+(?=\d)|\D/g, '');
            const amount = Math.floor((Math.random() * max) + 1);
            nightwatch.sendKeys('.modal.default input', amount);
        });

        nightwatch.useXpath()
            .expect.element('//button[contains(text(), "Add")]')
            .to.not.have.attribute('disabled')

        nightwatch.click('//button[contains(text(), "Add")]');
        nightwatch.pause(5000);

    }
}