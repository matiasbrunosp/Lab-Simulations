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

        labSimulationPage.isBenchNotOccupied();

        labSimulationPage.beakerOnBench(nightwatch);
        labSimulationPage.isBenchOccupied();
        labSimulationPage.waterOnBeaker(nightwatch);
        labSimulationPage.isAddButtonDisabled();
        labSimulationPage.setRndAmount();
        labSimulationPage.isAddButtonNotDisabled();

        labSimulationPage.clickAddButton();
        nightwatch.pause(3000);
    }
}