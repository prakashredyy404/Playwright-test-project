import  Loginpage  from '../pageobjects/login.js';
import  Homepage  from '../pageobjects/homepage.js';
//import { Productviewpage } from '../pageobjects/productviewpage';

class POMManager {
    constructor(page) {
        this.page = page;
        this.loginpage = new Loginpage(this.page);
        this.homepage = new Homepage(this.page);
      //  this.productviewpage = new Productviewpage(this.page);
    }

    getLoginpage() {
        return this.loginpage;
    }

    getHomepage() {
        return this.homepage;
    }

//  //   getProductviewpage() {
//         return this.productviewpage;
//     }
}

export default POMManager;