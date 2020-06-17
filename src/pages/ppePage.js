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
            this.click(this.elements.googlesEl);
            return this;
        },

        selectLabCoat() {
            this.click(this.elements.labCoatEl);
            return this;
        },

        selectGloves() {
            this.click(this.elements.glovesEl);
            return this;
        },

        clickSkipAnimation() {
            this.click(this.elements.skipAnimationBtn);
            return this;
        },

        isSkipAnimationButtonNotDisabled() {
            this.useXpath();
            return this.expect.element(this.elements.skipAnimationBtn)
                .to.not.have.attribute('disabled');
        }
    }]
};