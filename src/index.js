const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.facebook.com/login/');

        //await driver.findElement(By.css('[aria-label="Comment by Guy Shpigler a week ago"] [aria-label="More"]')).click();
        await driver.findElement(By.css('[aria-label="Email or Phone Number"]')).sendKeys('guy20056@walla.com');
        await driver.findElement(By.css('[aria-label="Password"]')).sendKeys('dhtjnusntus20',Key.RETURN);
                await driver.sleep(40000);
        //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } catch (e) {
    console.log(e);
    }finally {
        await driver.quit();
    }
})();
