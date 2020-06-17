module.exports = {
    elements: {
        startLabBtn: '.initial-screen__button'
    },

    commands: [{
        startLab() {
            this.useCss();
            this.waitForElementVisible(this.elements.startLabBtn);
            this.click(this.elements.startLabBtn)
            return this;
        }
    }]
};