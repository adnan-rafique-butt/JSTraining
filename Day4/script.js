// Objects in js
const obj = {
  firstName: "Adnan",
  lastName: "Rafique",
  education: "BS in Software Engineering",
  completionDate: "14 July 2021",
  age: 23,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const objStatement = document.querySelector("#objStatement");
objStatement.innerHTML = `${obj.firstName + " " + obj.lastName} had done his ${
  obj.education
} on ${obj.completionDate} when he was only ${obj.age} years old.`;

const forinobj = document.querySelector("#forinobj");
let txt = " ";
for (x in obj) {
  txt += obj[x] + ",";
}
forinobj.innerHTML = txt;

// add new property in object
obj.dob = "9 july 1998";
// console.log(obj);

// delete property from object
delete obj.age;
// console.log(obj);

// Methods in Objects
const methodinobj = document.querySelector("#methodinobj");
methodinobj.innerHTML = obj.fullName();

// Conversion of obj values to array
const arr = Object.values(obj);
const convinarr = document.querySelector("#convinarr");
convinarr.innerHTML = arr;

//Numbers in Js
//MAXVALUE
const a = Number.MAX_VALUE;
document.querySelector("#maxValue").innerHTML = a;

//MINVALUE
const b = Number.MIN_VALUE;
document.querySelector("#minValue").innerHTML = b;

//NAN
document.querySelector(
  "#isNan"
).innerHTML = `Checking if "Hello" is number or not isNaN("Hello)= ${isNaN(
  "Hello"
)}`;

//NegativeInfinity
const n = Number.NEGATIVE_INFINITY;
document.querySelector("#negInf").innerHTML = n;

//PositiveInfinity
const p = Number.POSITIVE_INFINITY;
document.querySelector("#posInf").innerHTML = p;

//Exponential
const num1 = 6.67899;
document.querySelector(
  "#expo"
).innerHTML = `${num1} with simple exponential function ${num1.toExponential()} \n and ${num1} with upto 3 exponential ${num1.toExponential(
  3
)}`;

//ToFixed
document.querySelector(
  "#tofixed"
).innerHTML = `${num1} with toFixed function upto 2, ${num1.toFixed(
  2
)} \n and ${num1} with toFixed function upto 4, ${num1.toFixed(4)}`;

//toLocaleString
document.querySelector(
  "#tolocalst"
).innerHTML = `Converting number ${num1} to arabic numbers using LocaleString Function ${num1.toLocaleString(
  "ar-EG"
)}`;

//ToPercision
document.querySelector(
  "#topercision"
).innerHTML = `${num1} with toPercision Function upto 3, ${num1.toPrecision(
  3
)}`;

//ToString
document.querySelector(
  "#tostring"
).innerHTML = `${num1} with toString Function with base 8, ${num1.toString(8)}`;

//ValueOff
document.querySelector(
  "#tovalue"
).innerHTML = `${num1} with valueOf Function, ${num1.valueOf()}`;
