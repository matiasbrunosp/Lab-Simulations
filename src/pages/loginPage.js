module.exports = {
    elements: {
        usrInput: '#username',
        pwdInput: '#password',
        submitBtn: '#submitButton',
    },

    commands: [{
        setUsername(usr) {
            this.pause(2000);
            this.waitForElementVisible(this.elements.usrInput);
            this.sendKeys(this.elements.usrInput, usr);
            return this;
        },

        setPassword(pwd) {
            this.waitForElementVisible(this.elements.pwdInput);
            this.sendKeys(this.elements.pwdInput, pwd);
            return this;
        },

        clickLogin() {
            this.waitForElementVisible(this.elements.submitBtn);
            this.click(this.elements.submitBtn);
            return this;
        }
    }]
};