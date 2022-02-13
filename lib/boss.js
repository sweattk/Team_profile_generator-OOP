const staff = require("./staff");

class boss extends staff {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "boss";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = boss;