class Teja {
#id;
#password;
    constructor(id, password) {
        this.#id = id;
        this.#password = password;
    }
    setId(id){
        this.#id = id;
    }
    getId(){
        return this.#id;
    }
    getpassword(){
        return this.#password;
    }
    setpassword(password){
        this.#password = password;
    }
}
export default Teja;
// const tejaInstance = new Teja('initialId', 'initialPassword');

// // Using the setters to update the values:
tejaInstance.setId('newId');
tejaInstance.setpassword('newPassword');

// // Verify the values using the getters:
console.log(tejaInstance.getId()); // Output: newId
//sample change in playwright program
console.log(tejaInstance.getpassword());
console.log(tejaInstance.getpassword());
console.log(tejaInstance.getpassword());
console.log(tejaInstance.getpassword());
console.log(tejaInstance.getpassword());
 // Output: newPasswordconsole.log(tejaInstance.getpassword());