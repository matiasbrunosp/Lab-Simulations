module.exports = {
    elements: {},

    commands: [{
        goToLab(lab) {
            this.useXpath();
            this.waitForElementVisible(`//span[contains(text(), "${lab}")]`);
            this.click(`//span[contains(text(), "${lab}")]`);
            return this;
        }
    }]
};