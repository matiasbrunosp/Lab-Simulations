module.exports = {
    elements: {},

    commands: [{
        goToLab(lab) {
            this.waitForElementVisible(`//span[contains(text(), "${lab}")]`);
            return this.click(`//span[contains(text(), "${lab}")]`);
        },

        isCourseTitleDisplayed(course) {
            this.useXpath();
            return this.waitForElementVisible(`//h1[contains(text(), "${course}")]`);
        }
    }]
};