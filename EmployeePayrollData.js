// UC => 12 Ability to create Employee Payroll Data with id, name and salary
// UC => 13 Extended Employee Payroll Data Storing Gender and Date
// UC => 14 Adding Regex Pattern to Validate of Name and It Should Throw Error If Not Match
// UC => 15 Adding Regex Pattern to Validate of Id, Salary, Gender.
class EmployeepayrollData {
    // Property
    id;
    name;
    salary;
    gender;
    startDate;

    // Constrctor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // Getter and setter method
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';    
    }

    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id))
            this._id = id;
        else throw 'Id is Incorrect!';    
    }

    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw 'salary is Incorrect!';    
    }

    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[MmFf]{1}$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else throw 'Invalid Gender Input!';
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else throw 'Date is Incorrect!';
    }

    // Method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "Id : " + this.id + ", Name : " + this.name + ", Salary : " + this.salary;
    }
}
let employeepayrollData = new EmployeepayrollData(1, "Mark", 300000, "M",new Date());
console.log(employeepayrollData.toString());

try {
    employeepayrollData.id = "-1";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.name = "John";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.salary = "-400000";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.gender = " ";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.startDate = new Date();
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}
