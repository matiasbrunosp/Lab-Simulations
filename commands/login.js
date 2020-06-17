module.exports.command = function (username, password) {
    const loginPage = this.page.loginPage();
    this.waitForElementVisible('#submitButton');
    loginPage.setUsername(username).setPassword(password)
    return loginPage.clickLogin();
};