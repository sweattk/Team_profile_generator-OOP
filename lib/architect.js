// 
const staff = require("./staff");

class architect extends staff {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "architect";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = architect;