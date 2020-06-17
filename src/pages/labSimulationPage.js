module.exports = {
    elements: {
        benchEl: '#Bench',
        materialsList: '#materials-list',
        beakerEl: '[aria-label="50 mL beaker"]',
        waterEl: '[aria-label="water"]',
        limitAmountTxt: '.lab-simulation-bodyText span',
        modalInput: '.modal.default input'
    },

    commands: [{
        clickBench() {
            return this.click(this.elements.benchEl);
        },

        clickMaterialsList() {
            return this.click(this.elements.materialsList);
        },

        beakerOnBench() {
            this.clickBench();
            this.sendKeys(this.elements.beakerEl, this.Keys.SPACE);
            this.sendKeys('.Beaker50ml-dragging', this.Keys.TAB);
            return this.click(this.elements.benchEl);
        },

        waterOnBeaker() {
            this.clickMaterialsList();
            this.sendKeys(this.elements.materialsList, [nightwatch.Keys.SHIFT, nightwatch.Keys.ENTER]);
            this.sendKeys(this.elements.waterEl, nightwatch.Keys.SPACE);
            this.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
            this.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
            this.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
            this.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.TAB);
            return this.sendKeys('.PLASTIC_H2O_BOTTLE-dragging', nightwatch.Keys.SPACE);
        },

        setRndAmount() {
            this.useCss();
            this.getText(this.elements.limitAmountTxt, function (text) {
                const max = text.value.replace(/^\D+(?=\d)|\D/g, '');
                const amount = Math.floor((Math.random() * max) + 1);
                return this.sendKeys('.modal.default input', amount);
            });
        }
    }]
};