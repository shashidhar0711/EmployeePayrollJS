// UC => 1 Check if Employee is Present or Not
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("employee is Present");
}

// UC => 2 Calculating Daily Employee Wage
// UC => 3 Refactor to Write in Function
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = new Array();

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
let dailyCntr = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs=getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage is : " + empWage);

// UC => 4 Calculating Wages for a Month 
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + empHrs + " Employee Wage : " + empWage);

// UC => 5 Calculate Wages till a Condition of total Working Hours or Working Days Reached for a Month
// UC => 6 Storing Total Employee Wages into array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs= getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days : " + totalWorkingDays + "  Total Hours : " + totalEmpHrs + "  Employee Wage : " + empWage);

// UC => 7 Performing Operations Using Array Helper Functions
// UC => 7A Calculate total Wages using Array forEach method or reduce method
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A => Total Days : " + totalWorkingDays + "\t\tTotal Hours : " + totalEmpHrs + "\tEmployee Wage : " + totalEmpWage);

let totalWage = 0;
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A => Employee Wage with Reduce : " + empDailyWageArr.reduce(totalWages, 0));

// UC => 7B Show the Day along with Daily Wage using Array map helper function
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B => Daily Wage Map");
console.log(mapDayWithWageArr);

// UC => 7C Show Days when Full time wage of 160 were earned using filter function
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C => Daily Wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC => 7D Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D => First time Fulltime Wage was Earned on Day : " + mapDayWithWageArr.find(findFulltimeWage));

// UC => 7E Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E => Check All Element have Full Time Wage : " + fullDayWageArr.every(isAllFulltimeWage));

// UC => 7F Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F => Check if Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC => 7G Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G => Number of Days Employee Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

// UC => 8 Store the Day and the Daily Wage along with the Total Wage
console.log(empDailyWageMap);
console.log("Employee Wage Map Total Hours : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

// UC => 9 Use the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions
// UC => 9A Calculate total Wage and total hours worked
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values())
    .filter(dailyHours => dailyHours > 0)
    .reduce(findTotal, 0);
let totalSalary = empDailyWageArr
    .filter(dailyWage => dailyWage > 0)
    .reduce(findTotal, 0);
console.log("UC9A => Emp Wage with Arrow" + "\tTotal Hours : " + totalHours + "\tTotal Wages : " + totalSalary);

// UC => 9B Show the full workings days, part working days and no working days
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " +fullWorkingDays);
console.log("Part Working Days : " +partWorkingDays);
console.log("Non Working Days : " +nonWorkingDays);

// UC => 10 Ability to Store the Day Hours Worked in Single Object.
totalEmpHrs = 0;
totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay: ' + this.dayNum + ' => Working Hours: ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage;
            },
        }
    );
}
console.log("UC10 => Showing Daily Hours Worked and Wage Earned : " +empDailyHrsAndWageArr);

// UC => 11 Perform Following Object Operations Using Arrow Functions.
// UC => 11A Calculate total Wage and total hours worked
totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                                      .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                                      .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("UC11A => Total Hours: " +totalHours + "\tTotal Wage: " +totalWages);

// UC => 11B Display the Full Workings Days Using foreach
process.stdout.write("UC11B => Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

// UC => 11C Show Part Working days Using Map by Reducing to String Array
let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                                                .map(dailyHrsAndWage => dailyHrsAndWage.toString());

console.log("\nUC11C => Part Time Working Days Strings : " + partWorkingDayStrArr);

// UC => 11D No working days only using Map function
let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                                             .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC11D => Non Working Day Nums : " + nonWorkingDayNums);