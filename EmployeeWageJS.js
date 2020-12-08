// UC => 1 Check if Employee is Present or Not
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("employee is Present");
}