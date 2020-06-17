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
            return this.sendKeys(this.elements.usrInput, usr);
        },

        setPassword(pwd) {
            this.waitForElementVisible(this.elements.pwdInput);
            return this.sendKeys(this.elements.pwdInput, pwd);
        },

        clickLogin() {
            this.waitForElementVisible(this.elements.submitBtn);
            return this.click(this.elements.submitBtn);
        }
    }]
};