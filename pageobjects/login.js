import { test, expect } from '@playwright/test';
class Loginpage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.submit = page.locator("#login");
        this.products = page.locator("div.card-body");
        
    }
    async validalink(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }
    async basepage(page) {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login", { waitUntil: "domcontentloaded" });
        await this.page.evaluate(() => {
            document.body.style.zoom = "70%";
        });
    }
}
export default Loginpage;
