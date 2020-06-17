module.exports = {

    before: function (nightwatch) {
        nightwatch.url('https://www.saplinglearning.com/ibiscms/login/');
    },

    after: function (nightwatch) {
        nightwatch.end();
    },

    'POC': function (nightwatch) {
        var data = require('../utils/data.json');
        const course = 'SAVISPARK';
        const lab = 'Santi\'s link';

        const loginPage = nightwatch.page.loginPage();
        const coursesPage = nightwatch.page.coursesPage();
        const coursesDetailsPage = nightwatch.page.courseDetailsPage();
        const startLabPage = nightwatch.page.startLabPage();
        const ppePage = nightwatch.page.ppePage();
        const labSimulationPage = nightwatch.page.labSimulationPage();

        loginPage.setUsername(data.username).setPassword(data.password)
        loginPage.clickLogin();

        coursesPage.clickCourse(course);
        coursesDetailsPage.isCourseTitleDisplayed(course);
        coursesDetailsPage.goToLab(lab);

        startLabPage.startLab();
        ppePage.selectGoogles().selectLabCoat().selectGloves();

        ppePage.isSkipAnimationButtonNotDisabled();
        ppePage.clickSkipAnimation();
        nightwatch.pause(5000);

        labSimulationPage.isBenchNotOccupied();

        // labSimulationPage.beakerOnBench();
        nightwatch.click('[aria-label="50 mL beaker"]');
        nightwatch.sendKeys('[aria-label="50 mL beaker"]', nightwatch.Keys.SPACE);
        nightwatch.sendKeys('.Beaker50ml-dragging', nightwatch.Keys.TAB);
        labSimulationPage.clickBench();
        labSimulationPage.isBenchOccupied();

        labSimulationPage.clickMaterialsList();
        nightwatch.sendKeys('#materials-list', [nightwatch.Keys.SHIFT, nightwatch.Keys.ENTER]);

        nightwatch.sendKeys('[aria-label="water"]', nightwatch.Keys.SPACE);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
        nightwatch.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.SPACE);
        nightwatch.pause(2000);

        labSimulationPage.isAddButtonDisabled();
        labSimulationPage.setRndAmount();
        labSimulationPage.isAddButtonNotDisabled();

        labSimulationPage.clickAddButton();
        nightwatch.pause(5000);
    }
}