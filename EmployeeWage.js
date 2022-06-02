console.log("Welcome to Employee wage program.");

//UC 11
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_ABSENT:
            return 0;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        case IS_PART_TIME:
            return PART_TIME_HOURS;
    }
}
let empHours = 0;
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let empDailyHoursWageArray = new Array();

function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyHoursWageArray.push({
        dayNum: totalWorkingDays,
        dailyHours: empHours,
        dailyWage: calculateDailyWage(empHours),
        toString(){
            return '\nDay'+ this.dayNum + ' => Working hours is '+ this.dailyHours + ' and wage earned = ' + this.dailyWage
        },
    })
}
let empWage = calculateDailyWage(totalWorkingHours);

//UC 11 A: Calculate total wage and total hours worked.

let totalWages = empDailyHoursWageArray
                 .filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0)
                 .reduce((totalWages, dailyHoursAndWage) => totalWages += dailyHoursAndWage.dailyWage, 0);

let totalHours = empDailyHoursWageArray
                 .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours > 0)
                 .reduce((totalHours, dailyHoursAndWage) => totalHours += dailyHoursAndWage.dailyHours, 0);
                 
console.log("UC 11 A: Total hours: "+ totalHours + " Total wages "+ totalWages);
console.log("\n******************************************************************");

//UC 11 B: Show the full working days using forEach.

process.stdout.write("UC 11B: Logging full work days.");

empDailyHoursWageArray.filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 8)
                      .forEach(dailyHoursAndWage => process.stdout.write(dailyHoursAndWage.toString()));
console.log("\n******************************************************************");

//UC 11 C: Show part time working days using Map by reducing to string array.

let partWorkingDaysStrArray = empDailyHoursWageArray
                              .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 4)
                              .map(dailyHoursAndWage => dailyHoursAndWage.toString());
console.log("\n UC 11 C: Parttime Working days string: "+ partWorkingDaysStrArray);
console.log("\n******************************************************************");

//UC 11 D: No working days only using Map function.

let nonWorkingDaysNum = empDailyHoursWageArray
                        .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 0)
                        .map(dailyHoursAndWage => dailyHoursAndWage.dayNum);
console.log("UC 11 D: Non working days number: "+ nonWorkingDaysNum);