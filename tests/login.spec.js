const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test-data/loginData.json');

test.describe('Login Tests', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });
        loginData.forEach((data) => {

    test(data.testName, async () => {

        await loginPage.login(
            data.username,
            data.password
        );

        if (data.expectedResult === 'success') {

            await loginPage.verifyUserIsLoggedIn();

        } else {

            await loginPage.verifyLoginError(
                data.expectedMessage
            );

        }

    });

});

});

