const architect = require("../lib/architect");

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new architect("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"architect\"", () => {
    const testValue = "architect";
    const e = new architect("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new architect("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});