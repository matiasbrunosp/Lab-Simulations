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
        const coursesPage = nightwatch.page.coursesPage();
        const coursesDetailsPage = nightwatch.page.courseDetailsPage();
        const startLabPage = nightwatch.page.startLabPage();
        const ppePage = nightwatch.page.ppePage();
        const labSimulationPage = nightwatch.page.labSimulationPage();

        loginPage.setUsername(data.username).setPassword(data.password).clickLogin();
        coursesPage.clickCourse("SAVISPARK");

        // nightwatch.useXpath().click('//h4[contains(text(), "SAVISPARK")]');
        // nightwatch.waitForElementVisible('//h1[contains(text(), "SAVISPARK")]');

        coursesDetailsPage.goToLab("Santi's link");
        startLabPage.startLab();

        ppePage.selectGoogles().selectLabCoat().selectGloves();

        nightwatch.useXpath();
        nightwatch.expect.element('//button[contains(text(), "Skip Animation")]').to.not.have.attribute('disabled');
        nightwatch.click('//button[contains(text(), "Skip Animation")]').useCss();

        // ppePage.clickSkipAnimation()
        nightwatch.pause(5000);
        nightwatch.assert.not.cssClassPresent("#Bench", "savi-dnd-target-occupied");

        // labSimulationPage.dragBeakerOnBench();
        nightwatch.click('[aria-label="50 mL beaker"]');
        nightwatch.sendKeys('[aria-label="50 mL beaker"]', nightwatch.Keys.SPACE);
        nightwatch.sendKeys('.Beaker50ml-dragging', nightwatch.Keys.TAB);

        labSimulationPage.clickBench();
        nightwatch.assert.cssClassPresent("#Bench", "savi-dnd-target-occupied");

        labSimulationPage.clickMaterialsList();
        nightwatch.sendKeys('#materials-list', [nightwatch.Keys.SHIFT, nightwatch.Keys.ENTER]);

        nightwatch.sendKeys('[aria-label="water"]', nightwatch.Keys.SPACE);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.SPACE);
        nightwatch.pause(2000);

        nightwatch.useXpath().expect.element('//button[contains(text(), "Add")]')
            .to.have.attribute('disabled');

        labSimulationPage.setRndAmount();
        nightwatch.useXpath().expect.element('//button[contains(text(), "Add")]')
            .to.not.have.attribute('disabled')

        nightwatch.click('//button[contains(text(), "Add")]');
        nightwatch.pause(5000);
    }
}