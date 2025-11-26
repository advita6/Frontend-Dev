class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        return this.name + " works in " + this.department;
    }
}

class Manager extends Employee {
    work() {
        return this.name + " manages the " + this.department + " department";
    }
}

const e = new Employee("Riya", "Finance");
const m = new Manager("Advita", "Tech");

console.log(e.work());
console.log(m.work());
