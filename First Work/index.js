// 1. Ways to print in JavaScript
//document.write("This is document write")
// alert("Hi");

// 2. JavaScript Console API
console.log("Hello World");
//console.log("Hello World", 4+6, "Another Log");
//console.warn("This is warning")
//console.error("This is an error");
//console.clear()
//console.assert(4==6)
//console.assert(4==(6-2))

//document.getElementByTagName('h1');
//document.getElementByTagName('h1')[0].style.fontsize = "99px"
//document.getElementByTagName('h1')[0].style.background = "red"
//document.getElementByTagName('h1')[0].style.visibilty = "hidden"
//document.getElementByTagName('h1')[0].style.display = "none"
//recommended to add script just before body
/*
multi
lines comment
*/

//3. JavaScript Variables
// What are Variables? - Containers to Store data values
var number1 = 20;
var number2 = 30;
// console.log(number1 + number2)

// 4. Data types in javascript
// Numbers
var num1 = 34;
var num2 = 40;

//string
var str1 = "This is string"
var str2 = 'This is also a string'

//Objects
var marks = {
       hamad: 34,
       umer: 33,
       huzaifa: 33.22
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var umd = undefined
var umd;
// console.log(umd)
// console.log(undefined)

var n = null;
// console.log(n);

/*
At a very high level, there are two types of datatypes in javascript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: arrays, objects
*/

var arr = [1, 2, 3, 4, "hello", 5]
// console.log(arr);

// Operators in JavaScript

// Arithmetic Operators
var a = 66;
var b = 55;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

//Assignment Operators
var c = b;
// c +=2;
// c -=2; // c = c - 2;
// c *=2;
// c /=2;
// console.log(a);

// Comparision Operator
// var a = 66;
// var b = 55;
// console.log(a == b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a > b);

// Logical Operators

//Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical Or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// // Logical Not
// console.log(!true);
// console.log(!false);

//Operators, Operands

// function avg(a, b){
//        return (a + b)/2;
// }

// c1 = avg(12, 4);
// c2 = avg(44, 2);
// console.log(c1, c2);

//Funstion in JavaScript
function avg(a, b) {
       c = (a + b) / 2;
       return c;
}

//DRY = Do not repear yourself
c1 = avg(12, 4);
c2 = avg(44, 2);
// console.log(c1, c2);

// conditional in JavaScript

var age = 34;
// Single if statement
// if (age > 8){
//        console.log('You are not a kid');
// }
// // if - else statement
// if (age > 8){
//        console.log('You are not a kid');
// }
// else{
//        console.log('You are a kid');
// }

// // if - else Ladder
// if (age > 8){
//        console.log('You are not a kid');
// }
// else if(age < 7){
//        console.log('You are a kid');
// }
// else if(age > 8){
//        console.log('You are a kid');
// } 
// else{
//        console.log('End');
// }


var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// for (var i = 0; i < arr.length; i++){
//        if(i == 2){
//               // break;
//               continue;
//        }
//        console.log(arr[i]);
// }

// arr.forEach(function(element1){
//        console.log(element1);
// })

// const ac=0;
// ac++;
// // ac = ac + 1;

// let j = 0;
// while (j<arr.length){
//        console.log(arr[j]);
//        j++; 
// }
 
// do {
//        console.log(arr[j]);
//        j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];

// Array Methods
console.log(myArr.length);
// myArr.pop();
// myArr.push("hamad")
// myArr.shift()
// myArr.unshift("Harry")
// console.log(myArr.unshift("Harry"))
const newLen = myArr.unshift("hamad")
console.log(newLen);
console.log(myArr);
//myArr.toString()
//myArr.sort()

//String Methods in JavaScript
let myString = "He is a good boy good good";
// console.log(myString.length)
// console.log(myString.indexOf("good"))
// console.log(myString.lastIndexOf("good"))

// console.log(myString.slice(0,3))
// d = myString.replace("hamad","huzaifa");
// console.log(d, myString)

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime()); //Date in Seconds
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM Document Object Model
// DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container"); //gebcn
console.log(elemClass);

// elemClass[0].style.background = "yellow";

// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success")

// elemClass[0].innerHTML
// console.log(elem.innerHTML)
// console.log(elem.innerText)
// elemClass[0].innerText

//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b')
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
//document.location
//document.title
//document.URL
//document.scripts
//document.links
//document.images
//document.domain

// selecting using query
// sel = document.querySelector('.container')
// console.log(sel)

// sel = document.querySelectorAll('.container')
// console.log(sel)

//Events in JavaScript
// function clicked(){
//        console.log('The button was clicked')
// }

// window.onload = function(){
//        console.log('The document was loaded')
// }

// firstContainer.addEventListener('click', function(){
//        console.log("Clicked on Container")
// })

// firstContainer.addEventListener('click', function(){
//        document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//        console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//        console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//        console.log("Mouse out of Container")
// })

// firstContainer.addEventListener('mouseup', function(){
//        console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//        console.log("Mouse down when clicked on Container");
// })

// let prevHTML =  document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup', function(){
//        document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//        console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//        document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//        console.log("Mouse down when clicked on Container");
// })


//Arrow Functions
// function summ(a,b){
//        return a+b;
// }

// summ = (a,b)=>{
//        return a+b;
// }

//SetTimeout and setInterval
logKaro = ()=>{
       document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
       console.log("I am your log")
}
// setTimeout(logKaro, 2000);
// setInterval(logKaro, 2000);

// use clearInterval(clr)/clearTimeout to cancel setInterval/setTimeout
// clr = setInterval(logKaro, 2000);
// clearTimeout(clr) //in console

// JavaScript localStorage
//localStorage.clear()
//localStorage.setItem('name', 'hamad')
//localStorage.getItem('name')
//localStorage.removeItem('name')

//JSON (JavaScript Object Notation)
// obj = {name: "hamad", length: 1, a:{this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso)
// parsed = JSON.parse(`{"name":"hamad","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//Template Literals - Backticks
// a = 34;
// console.log(`this is my 4{a}`)


//ECMAScript
