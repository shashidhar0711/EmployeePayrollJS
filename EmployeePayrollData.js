// UC => 12 Ability to create Employee Payroll Data with id, name and salary
class EmployeepayrollData {
    // Property
    id;
    salary;

    // Constrctor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Getter and setter method
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    // Method
    toString() {
        return "Id : " + this.id + ", Name : " + this.name + ", Salary : " + this.salary;
    }
}
let employeepayrollData = new EmployeepayrollData(1, "Mark", 300000);
console.log(employeepayrollData.toString());
employeepayrollData.name = "john";
console.log(employeepayrollData.toString());