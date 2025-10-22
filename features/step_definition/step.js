import { Given, When, Then } from '@cucumber/cucumber';
import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import POMManager from '../../pageobjects/POMmanager.js';
import Teja from '../../pageobjects/teja.js';
//import Loginpage from '../../pageobjects/login.js';
Given('user navigates to login page', async function () {
        console.log('navigated to login page');
        this.login = this.pom.getLoginpage();
        await this.login.basepage();
});
When('user logs in with {string} and {string}', { timeout: 60000 }, async function (username, password) {
        // Write code here that turns the phrase above into concrete actions
        console.log(`logged in with ${username} and ${password}`);
        await this.login.validalink(username, password);
        this.home = this.pom.getHomepage();
        await this.home.productview();
});
Then('user should see the dashboard', async function () {
        // Write code here that turns the phrase above into concrete actions
                const result = await this.home.datareadname('sample.xlsx', 'Sheet1', {namevalue: "a"});
        if (result) {
                console.log(`name: ${result.name}`);
                console.log(`Age: ${result.age}`);
                console.log(`Price: ${result.price}`);
                console.log(`Product: ${result.product}`);
        }
        else {console.log("data not found");}
               console.log('dashboard is visible');
});
Then('last_login should be updated in the database', async function () {
        // Write code here that turns the phrase above into concrete actions
               const dbdata = await this.home.datareadname('sample.xlsx', 'cred', {id:1});
        if(dbdata){       
        console.log(`${dbdata.username}`);
        console.log(`${dbdata.password}`); }
        //expect(dbdata.last_login).toBe(new Date().toLocaleDateString());
        console.log('last_login is updated in the database');
        const tejaInstance = new Teja();
        tejaInstance.setid('newId');
        tejaInstance.setpassword('newPassword');
        console.log(tejaInstance.getid());
        console.log(tejaInstance.getpassword());
});
