// /* Printing the string "Hello World The first javascript code" to the console. */
// console.log('Hello World The first javascript code');

/* Declaring a variable called names and assigning it the value of Ryan. It then prints the value of
names to the console. */
// let names = 'Ryan';
// console.log(names);

/* Declaring a constant variable called interestRate and assigning it the value of 0.3. It then prints
the value of interestRate to the console. */
// const interestRate = 0.3;
// // interestRate = 1;
// console.log(interestRate);

/* Declaring variables and assigning them values. */
// data types or Literal
// let name='John'; //string literal
// let age = 22; //Number literal
let isApproved = true; //boolean literal
let firstName = undefined;
let lastName = null;

/* Creating an object called person with two properties, name and age. */
let person = {
    name: 'John',
    age: 22
};

//Dot Notation
/* Assigning the value of John to the name property of the person object. */
person.name = 'John';

//Bracket Notation
/* Assigning the value of John to the name property of the person object. */
// let selection = 'name';
// person[selection] = 'John';
// console.log(person.name);

//Array
/* Creating an array called selectedColors and assigning it the values of red and blue. It then assigns
the value of 1 to the third element of the array. It then prints the length of the array to the
console. */
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);


/**
 * The function example is called, and the console logs the string "The function example".
 */
// function greet() {
//     console.log("The function example");
// }
// /* Calling the function greet. */
// greet();


/**
//  * The function job takes two parameters, name and lastName, and prints out a greeting to the console.
//  * @param name - a string
//  * @param lastName - 'Doe'
//  */
// function job(name, lastName){
//     console.log('Hello ' + name + ' ' + lastName);
// }
// /* Calling the function job and passing in the arguments 'Light' and 'Yagami'. */
// job('Light','Yagami');

// function that calculate value
// /**
//  * The square function takes a number as an argument and returns the square of that number.
//  * @param number - The number to square.
//  * @returns The square of the number.
//  */
// function square(number) {
//    return number * number;
// }
// /* Calling the function square and passing in the argument 2. It then prints the value of the function
// to the console. */
// console.log(square(2));
// let number = square(2);
// console.log(number);


/*
Primitive Data type : undefined, null, number, string, boolean, symbol 
Reference data type : Arrays and objects
*/

//operators in javascript
// var a = 56;
// var b = 85;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// //comparison operator
// console.log(a==b);
// console.log(a<b);
// console.log(a>=b);

//conditional
// var age = 50;
// if(age > 18){
//     console.log("You can drink alcohol");
// }
// //if else statement
// if(age > 8){
//     console.log('You are not a kid');
// }
// else{
//     console.log('You are a kid');
// }

/// if else ladder
// if(age > 18){
//     console.log("You are not kid");
// }
// else if(age > 26)
// {
//     console.log("You are older");
// }
// else if(age > 32)
// {
//     console.log("You are lot older");
// }
// else{
//     console.log("You are kid")
// }

///loops in javascript
/* Looping through the array and printing each element to the console. */
// var arr = [1,2,3,4,5,6,7]
// // console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

/* Looping through the array and printing each element to the console. */
// arr.forEach(function(element){
//     console.log(element);
// })

/* Declaring a variable called j and assigning it the value of 0. It is then declaring a constant
 variable called ac and assigning it the value of 0. It is then incrementing the value of ac by 1. */
// let j=0;
// const ac = 0;
// ac++;

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j < arr.length);

let myArr = ["Fan", "Camera", 25, null, true];
//Array methods
// console.log(myArr.length);
//myArr.pop();
// myArr.push("harry");
// myArr.shift()
// myArr.unshift("Harry")
// console.log(myArr);

//String method
let myString = "Harry is a good boy";
// console.log(myString.length);
// console.log(myString.indexOf("good"))

// console.log(myString.slice(1,3))
d = myString.replace("Harry","Rohan");
// d = d.replace("good","bad")
// console.log(d, myString)

let myDate = new Date();
// console.log(myDate.getDay());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());

//DOM manipulation
let elem =  document.getElementById('clickButton');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
// replaceChild
// removeChild(element)

// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

//Events in javascript
// function clicked(){
//     console.log('The button was clicked')
// }

// window.onload = function(){
//     console.log('The document was loaded')
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>"
//     console.log("Click properly")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of container")
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up clicked on container")
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>"
//     console.log("Mouse down clicked on container")
// })

// Arrow Function
// function sums(a, b){
//     return a+b;
// }

sums = (a, b)=>{
    return a+b;
}

// logKaro = () =>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Set timeout fired</b>"
//     console.log("I am your log")
// } 

// setTimeout and setInterval
// setTimeout(logKaro, 2000);
// clr = setInterval(logKaro, 2000);

// // Javascript localStorage
// localStorage.setItem('name', 'Rupesh')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()

// //JSon
// obj = {name:"rupesh", length:1, a:{this:"that"}}
// jso = JSON.stringify(obj);
// console.log(typeof(jso))
// parsed = JSON.parse(`{"name":"rupesh", "length":1, "a":{"this":"that"}}`)
// console.log(parsed);

