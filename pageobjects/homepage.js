import { test, expect } from '@playwright/test';
import readExcel from '../features/utils/excelReader.js';
import fs from 'fs';
class Homepage {
    constructor(page) {
        this.page = page;
        this.products = page.locator("[class='card-body']");
        // this.productview =("text= View");
        this.productname = "ADIDAS ORIGINAL";
        this.productbutton = page.locator(".product-buttons");
        this.productinview = page.locator(".btn.btn-primary");
    }

    async productview() {
        await this.products.first().waitFor();
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === this.productname) {
                await this.products.nth(i).locator("text= View").click();
                console.log("product found")
                break;
            }
            
        }
        // await this.productbutton.first().waitFor();
        await this.page.waitForSelector("div h2");
        const viproduct = this.page.locator("div h2").first();
        const productvi = await viproduct.textContent();
        console.log(productvi);
        await this.page.locator("img.img-fluid").screenshot({ path: 'screenshots/product.png' });
        // expect(scr).toMatchSnapshot("screenshots/product.png");
        expect(productvi).toContain(this.productname);
        await this.productbutton.first().click();
        await expect(this.productinview).toBeVisible();
        await this.productinview.waitFor();
        await this.productinview.click();
        await this.productbutton.first().waitFor();
    }

    async datareadname(path, Sheet,{namevalue,id}) {
        if(namevalue !== undefined){
        const products = readExcel(path, Sheet,namevalue);
        const result = products.find(row => row.name === namevalue);
        return result;}
        else if(id !== undefined){const cred = readExcel(path, Sheet,id);
            const result = cred.find(row => row.id === id);
            return result;
        }
        return null;
    }

    // async datareadById(path, Sheet,id){
    //         const cred = readExcel(path, Sheet,id);
    //         const result = cred.find(row => row.id === id);
    //         return result;
    // }
}
export default Homepage;

