module.exports = {
    elements: {
        coursesTitle: '//h1[contains(text(), "Courses Page")]',
        savisparkLink: '//h4[contains(text(), "SAVISPARK")]'
    },

    commands: [{
        clickSaviSpark() {
            this.useXpath().waitForElementVisible(this.elements.savisparkLink);
            return this.click(this.elements.savisparkLink);
        }
    }]
};