module.exports = {
    elements: {
        googlesEl: '[name="Goggles"]',
        labCoatEl: '[name="Lab Coat"]',
        glovesEl: '[name="Gloves"]',
        skipAnimationBtn: {
            selector: '//button[contains(text(), "Skip Animation")]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        selectGoogles() {
            this.useCss();
            this.waitForElementVisible(this.elements.googlesEl);
            return this.click(this.elements.googlesEl);
        },

        selectLabCoat() {
            return this.click(this.elements.labCoatEl);
        },

        selectGloves() {
            return this.click(this.elements.glovesEl);
        },

        clickSkipAnimation() {
            return this.click(this.elements.skipAnimationBtn);
        },

        isSkipAnimationButtonNotDisabled() {
            this.useXpath();
            return this.expect.element(this.elements.skipAnimationBtn)
                .to.not.have.attribute('disabled');
        }
    }]
};