console.log(10 > 5 && 20 > 15);

console.log(10 > 15 && 20 > 10);

console.log(10 > 20 || 15 > 10);

console.log(5 > 10 || 20 < 15);

console.log(!(10 > 5));

console.log(!(10 < 5));

console.log((10 > 5 && 20 > 15) || 5 > 10);

console.log((10 > 5 && 20 > 15) || !(5 > 10));


let age = 20;
console.log(age >= 18 ? "Eligible" : "Not Eligible");

let marks = 50;
console.log(marks >= 35 ? "Pass" : "Fail");

let number = 15;
console.log(number > 10 ? "Greater than 10" : "Not greater than 10");

let num = 8;
console.log(num % 2 === 0 ? "Even" : "Odd");

let salary = 40000;
console.log(salary > 30000 ? "Good Salary" : "Low Salary");


let firstName = "Venkatesh";
let lastName = "Vasa";
let city = "Hyderabad";

console.log(firstName + " " + lastName + " " + city);

let name = "Venkatesh";
let myAge = 22;

console.log("My name is " + name + " and I am " + myAge + " years old.");

let product = "Laptop";
let price = 50000;
let brand = "Dell";

console.log("I bought a " + brand + " " + product + " for ₹" + price);

let myName = "Venkatesh";
let qualification = "B.Tech CSE";
let company = "Stackly";

console.log(`My name is ${myName}, I completed ${qualification}, and I work at ${company}.`);

let userName = "Venkatesh";
let userAge = 22;
let userCity = "Hyderabad";

console.log(`My name is ${userName}, I am ${userAge} years old, and I live in ${userCity}.`);


let result1 = "10" + 5;
console.log(result1);
console.log(typeof result1);

let result2 = 10 + 5;
console.log(result2);
console.log(typeof result2);

let result3 = 10 + true;
console.log(result3);
console.log(typeof result3);

let result4 = 10 + null;
console.log(result4);
console.log(typeof result4);

let result5 = "Hello " + true;
console.log(result5);
console.log(typeof result5);

let result6 = "Hello " + [1, 2, 3];
console.log(result6);
console.log(typeof result6);

let result7 = 10 + {};
console.log(result7);
console.log(typeof result7);

let expression1 = "10" - 5;
let expression2 = "10" + 5;
let expression3 = 10 + true;

console.log(expression1, typeof expression1);
console.log(expression2, typeof expression2);
console.log(expression3, typeof expression3);


let value1 = Number("100");
console.log(value1);

let value2 = Number("25");
console.log(value2);
console.log(typeof value2);

console.log(Number(true));

console.log(Number(false));

console.log(Number(""));

console.log(Number(null));

console.log(Number(undefined));

console.log(Boolean("Hello"));

console.log(Boolean(""));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));

console.log(Boolean([]));

console.log(Boolean({}));


let age1 = 20;

if (age1 >= 18) {
    console.log("Eligible");
}


let age2 = 16;

if (age2 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


let marks1 = 45;

if (marks1 >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


let time = 14;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Morning");
} else if (time >= 13 && time <= 17) {
    console.log("Afternoon");
} else if (time >= 18 && time <= 19) {
    console.log("Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Time");
}


let temperature = 30;

if (temperature > 35) {
    console.log("Hot");
} else if (temperature >= 20 && temperature <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}


let personAge = 25;
let height = 175;
let weight = 70;

if (personAge >= 18) {
    if (height >= 170) {
        if (weight >= 60) {
            console.log("Eligible");
        }
    }
}


let trafficLight = "red";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Light");
}


let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    case "Saturday":
        console.log("Saturday");
        break;

    case "Sunday":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}


let choice = 2;

switch (choice) {
    case 1:
        console.log("Start");
        break;

    case 2:
        console.log("Settings");
        break;

    case 3:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}


let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}


let employee = {
    name: "Venkatesh",
    role: "Python Developer",
    experience: "Fresher"
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}
