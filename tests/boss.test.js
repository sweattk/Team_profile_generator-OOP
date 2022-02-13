const boss = require("../lib/boss");
const staff = require("../lib/staff");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new boss("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"boss\"", () => {
    const testValue = "boss";
    const e = new boss("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new boss("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});