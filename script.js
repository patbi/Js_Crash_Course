//-- let, const

// const age = 30;
// age = 31;

// console.log(age);

//---------------------------

// let score;

// score = 10;

// console.log(score);

//----------------------------

//-- String, Numbers, Boolean, null, undefined, Symbol

// const name = 'Patrick Biyaga';
// const age = 29;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// const y = undefined;
// let z;

// console.log(typeof name);

//-----------------------------

//-- Concatenation
// const name = 'Biyaga';
// const age = 29;

// console.log("My name is " + name + " and I am " + age + " year old ");

// Template String 
// console.log(`My name is ${name} and I am ${age}`);

// OR 
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello); 

//-- Methods
// const p = 'Hello World';
// console.log(p.length);
// console.log(p.toUpperCase());
// console.log(p.subString(0, 5).toUpperCase());
// console.log(p.split(''));

// const x = 'technology, computers, it, code';

// console.log(x.split(', '));

//-- Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

//OR

// const startup = ['apples', 'microsoft', 'facebook', 'google', 'seedoc'];
// console.log(startup);
//OR
// console.log(startup[4]);

// startup[4] = 'navigo';
// console.log(startup);

// startup.push('projet47');
// console.log(startup);

// startup.unshift('lefax');
// console.log(startup);

// startup.pop();
// console.log(startup);

// console.log(Array.isArray(startup)); //true
// console.log(Array.isArray('hello')); //false

// console.log(startup.indexOf('lefax'));

//-- Objects
// const person = {
// 	firstName: 'Patrick',
// 	lastName: 'Biyaga',
// 	age: 29,
// 	hobbies: ['music', 'movies', 'sports'],
// 	address: {
// 		street: '50 main st',
// 		city: 'Boston',
// 		state: 'MA'
// 	}
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.firstName, person.lastName);
// console.log(hobbies[1]);
// console.log(person.address.city);


//OR

// const { firstName, lastName, address: { city }} = person;
// console.log(firstName);
// console.log(city);


//------------------------
// const rdv = [
// 	{
// 		id: 1,
// 		text: 'Take out trash',
// 		isCompleted: true
// 	},

// 	{
// 		id: 2,
// 		text: 'Meeting with boss',
// 		isCompleted: true
// 	},

// 	{
// 		id: 3,
// 		text: 'Dentist appt',
// 		isCompleted: true
// 	}
// ];
// console.log(rdv);

// const rdvJSON = JSON.stringify(rdv);
// console.log(rdvJSON);

//For loop
// for(let i=0; i <= 10; i++) {
// 	console.log(`For Loop Number: ${i}`);
// }

// While
// let i = 0;
// while(i < 10) {
// 	console.log(`While Loop Number: ${i}`);
// 	i++
// }

// rdv Loop with for
// for(let i = 0; i < rdv.length; i++) {
// 	console.log(rdv[i].text);
}

//OR
// for(let pat of rdv ) {
// 	console.log(pat.text);
// }

//--
// for(let pat of rdv ) {
// 	console.log(pat.id);
// }


//----------------------------------

// forEach, map, filter
// rdv.forEach(function(pat) {
// 	console.log(pat.text);
// });

//---------------------------

// const rdvText = rdv.map(function(pat) {
// 	return pat.text;
// });
// console.log(rdvText);

//----------------------------

// const rdvCompleted = rdv.filter(function(pat) {
// 	return pat.isCompleted === true;
// });
// console.log(rdvCompleted);

//--------
// const rdvCompleted2 = rdv.filter(function(pat) {
// 	return pat.isCompleted === true;
// }).map(function(pat) {
// 	return pat.text;
// });
// console.log(rdvCompleted2); 

//---------------- Conditions

const x = 5;

if(x === 10) {
	console.log('x is 10');
} else if(x > 10) {
	console.log('x is greater than 10');
} else {
	console.log('x is less than 10');
}

//-----------------
const x = 4;
const y = 11;

if(x > 5 || y > 10) {
	console.log('x is more than 5 or y is more than 10');
}

//----------
const x = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

//OR
switch(color) {
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is NOT read or blue');
		break;	
}

//-------------- function()
function addNums(num1, num2) {
	console.log(num1 + num2);
}

addNums(4,5);
//--OR
function addNums(num1 = 1, num2 = 1) {
	console.log(num1 + num2);
}

addNums(4,5);

//--OR
function addNums(num1, num2) {
	return num1 + num2;
}

console.log(addNums(4,5));

//--OR
const addNums (num1 = 1, num2 = 1) => {
	return num1 + num2;
}

console.log(addNums(4,5));

//--OR
const addNums = (num1 = 1, num2 = 1) => {
	console.log(num1 + num2);
}

addNums(5,5);

//--OR
const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNums(5,5);

//--OR
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(5,5));

//--
const addNums = num1 => num1 + 5;
console.log(addNums(5));


//-- construct function with prototype
function Persons(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	this.getBirthYear = function() {
		return this.dob.getFullYear();
	}
	this.getFullName = function() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// Instantiate object
const person1 = new Persons('John', 'Doe', '4-3-1988');
const person2 = new Persons('Isaac', 'Patrick', '3-6-1990');

console.log(person1.getBirthYear());
console.log(person1.getFullName());