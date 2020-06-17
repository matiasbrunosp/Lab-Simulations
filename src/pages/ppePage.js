module.exports = {
    elements: {
        googlesEl: '[name="Goggles"]',
        labCoatEl: '[name="Lab Coat"]',
        glovesEl: '[name="Gloves"]',
        skipAnimationBtn: '//button[contains(text(), "Skip Animation")]'
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
            this.useXpath();
            this.click(this.elements.skipAnimationBtn);
            return this;
        }
    }]
};