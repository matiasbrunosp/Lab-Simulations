module.exports = {
    elements: {
        coursesTitle: {
            selector: '//h1[contains(text(), "Courses Page")]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        clickCourse(course) {
            this.useXpath();
            this.waitForElementVisible(this.elements.coursesTitle);
            return this.click(`//h4[contains(text(), "${course}")]`);
        }
    }]
};