module.exports = {
    elements: {
        benchEl: '#Bench',
        materialsList: '#materials-list',
        beakerEl: '[aria-label="50 mL beaker"]',
        waterEl: '[aria-label="water"]',
        limitAmountTxt: '.lab-simulation-bodyText span',
        modalInput: '.modal.default input',
        addBtn: {
            selector: '//button[contains(text(), "Add")]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        clickBench() {
            return this.click(this.elements.benchEl);
        },

        clickMaterialsList() {
            return this.click(this.elements.materialsList);
        },

        beakerOnBench(nightwatch) {
            const beakerDragging = '.Beaker50ml-dragging';

            this.click(this.elements.beakerEl);
            this.sendKeys(this.elements.beakerEl, nightwatch.Keys.SPACE);
            this.sendKeys(beakerDragging, nightwatch.Keys.TAB);
            return this.clickBench();
        },

        waterOnBeaker(nightwatch) {
            const bottleDragging = '.PLASTIC_H2O_BOTTLE-dragging';

            this.clickMaterialsList();
            this.sendKeys(this.elements.materialsList, [nightwatch.Keys.SHIFT, nightwatch.Keys.ENTER]);
            this.sendKeys(this.elements.waterEl, nightwatch.Keys.SPACE);

            this.sendKeys(bottleDragging, nightwatch.Keys.TAB);
            this.sendKeys(bottleDragging, nightwatch.Keys.TAB);
            this.sendKeys(bottleDragging, nightwatch.Keys.TAB);
            this.sendKeys(bottleDragging, nightwatch.Keys.TAB);
            return this.sendKeys(bottleDragging, nightwatch.Keys.SPACE);
        },

        setRndAmount() {
            this.useCss();
            this.getText(this.elements.limitAmountTxt, function (text) {
                const max = text.value.replace(/^\D+(?=\d)|\D/g, '');
                const amount = Math.floor((Math.random() * max) + 1);
                return this.sendKeys('.modal.default input', amount);
            });
        },

        isBenchOccupied() {
            return this.assert.cssClassPresent(this.elements.benchEl, "savi-dnd-target-occupied");
        },

        isBenchNotOccupied() {
            this.useCss();
            return this.assert.not.cssClassPresent(this.elements.benchEl, "savi-dnd-target-occupied");
        },

        clickAddButton() {
            return this.click('//button[contains(text(), "Add")]');
        },

        isAddButtonDisabled() {
            this.useXpath();
            return this.expect.element(this.elements.addBtn).to.have.attribute('disabled');
        },

        isAddButtonNotDisabled() {
            this.useXpath();
            return this.expect.element(this.elements.addBtn).to.not.have.attribute('disabled');
        }
    }]
};