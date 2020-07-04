//Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;

console.log(a,b,c,d);

//How to get value of the variable myvar as output

var myvar= 1;
console.log("myvar");

// Declare variables to store your first name, last name, marital status, country and age in a single line

var first_name = "Amjath";
var last_name = " K";
var marital_status = "Yes";
var country = "India";
var age = 38;

console.log("Name: " + first_name + last_name + "Marital: "+  marital_status + "country: "+  country +   "Age: "+ age);

//Declare variables and assign string, boolean, undefined and null data types
var name = "Amjath";
var marital_status = true;
var country;
var age=null;
console.log(typeof (name), typeof(marital_status), typeof(country), typeof(age));

//6. Convert the string to integer
var numString = "234";
var num = parseInt(numString);
var num1 = Number(numString);
var num3 = +numString;

console.log(typeof(numString), typeof(num), typeof(num1), typeof(num3));

//Write 6 statement which provide truthy & falsey values.

// Outputs: "Truthy!"
if(true);

// Outputs: "Truthy!"
if({});

// Outputs: "Truthy!"
if([]);

// Outputs: "Truthy!"
if("some string");

// Outputs: "Truthy!"
if(3.14);

// Outputs: "Truthy!"
if(new Date());


// Outputs: "Falsy."
if(false);

// Outputs: "Falsy."
if(null);

// Outputs: "Falsy."
if(undefined);

// Outputs: "Falsy."
if(NaN);

// Outputs: "Falsy."
if(0);

// Outputs: "Falsy."
if("");
            

