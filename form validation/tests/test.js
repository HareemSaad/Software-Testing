const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Form Validation Tests', function() {
    let driver;

    // Setup the WebDriver before running tests
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Load your form before each test
    beforeEach(async function() {
        await driver.get('http://127.0.0.1:5500/form%20validation/form/index.html'); // Replace with your form's URL or local path
    });

    it('should show an error if no user name is provided', async function() {
        await driver.findElement(By.id('email')).sendKeys('invalidemail');
        await driver.findElement(By.id('submit')).click();

        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal('Enter valid user name');
    });

    it('should show an error if invalid user name is provided', async function() {
        await driver.findElement(By.id('username')).sendKeys('!!');
        await driver.findElement(By.id('submit')).click();

        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal('Enter valid user name');
    });

    it('should show an error if no email is provided', async function() {
        await driver.findElement(By.id('username')).sendKeys('Bob');
        await driver.findElement(By.id('email')).sendKeys('invalidemail');
        await driver.findElement(By.id('submit')).click();

        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal('Enter valid email');
    });

    it('should show an error if invalid email is provided', async function() {
        await driver.findElement(By.id('username')).sendKeys('Bob');
        await driver.findElement(By.id('email')).sendKeys('invalidemail');
        await driver.findElement(By.id('submit')).click();

        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal('Enter valid email');
    });it('should show an error for a password that is too short', async function() {
        await driver.findElement(By.id('username')).sendKeys('ValidUsername');
        await driver.findElement(By.id('email')).sendKeys('validemail@example.com');
        await driver.findElement(By.id('password')).sendKeys('short');
        await driver.findElement(By.id('submit')).click();
    
        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal('Enter valid password');
    });
    
    it('should show an error for a password that lacks numbers', async function() {
        await driver.findElement(By.id('username')).sendKeys('ValidUsername');
        await driver.findElement(By.id('email')).sendKeys('validemail@example.com');
        await driver.findElement(By.id('password')).sendKeys('PasswordWithoutNumbers');
        await driver.findElement(By.id('submit')).click();
    
        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal('Enter valid password');
    });
    
    // Test cases for confirm password
    it('should show an error if confirm password does not match', async function() {
        await driver.findElement(By.id('username')).sendKeys('ValidUsername');
        await driver.findElement(By.id('email')).sendKeys('validemail@example.com');
        await driver.findElement(By.id('password')).sendKeys('ValidPassword123');
        await driver.findElement(By.id('cnfrm-password')).sendKeys('DifferentPassword123');
        await driver.findElement(By.id('submit')).click();
    
        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal("Passwords don't match");
    });
    
    // Test for all valid inputs
    it('should not show an error for valid inputs', async function() {
        await driver.findElement(By.id('username')).sendKeys('ValidUsername');
        await driver.findElement(By.id('email')).sendKeys('validemail@example.com');
        await driver.findElement(By.id('password')).sendKeys('ValidPassword123');
        await driver.findElement(By.id('cnfrm-password')).sendKeys('ValidPassword123');
        await driver.findElement(By.id('cb')).click(); // Assuming this is the terms & conditions checkbox
        await driver.findElement(By.id('submit')).click();
    
        let errorMessage = await driver.findElement(By.id('error')).getText();
        expect(errorMessage).to.equal('');
    });

    // Teardown the WebDriver after tests
    after(async function() {
        await driver.quit();
    });
});
