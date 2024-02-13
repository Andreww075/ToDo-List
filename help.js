



/*class Clock {
	constructor({template}) {
		this.template = template;
	}

	render() {
		let date = new Date();

	    let hours = date.getHours();
	    if (hours < 10) hours = '0' + hours;

	    let mins = date.getMinutes();
	    if (mins < 10) mins = '0' + mins;

	    let secs = date.getSeconds();
	    if (secs < 10) secs = '0' + secs;

	    let output = this.template
	     	.replace('h', hours)
	    	.replace('m', mins)
	      	.replace('s', secs);

	    console.log(output);
	}

	stop() {
		clearInterval(this.timer)
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000)
	}
}

let clock = new Clock({template: 'h:m:s'});
//clock.start();

*/


/*class Button {
	constructor(value) {
		this.value = value;
	}

	click = () => {
		console.log(this.value);
	}
}

let button = new Button('Hello');

setTimeout(button.click, 1000)
*/

/*
class User {

  ['say' + 'Hi']() {
    console.log("Hello");
  }

}

new User().sayHi();

*/




/*class User {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(this.name);
	}
}

let user = new User('John');
user.sayHello();

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHello);
console.log(Object.getOwnPropertyNames(User.prototype));*/

/*
function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;

	Object.defineProperty(this, 'age', {
		get() {
			let todayYear = new Date().getFullYear();
			return todayYear - this.birthday.getFullYear();
		}
	});
};

let john = new User('John', new Date(1992, 6, 1));

console.log(john.birthday);
console.log(john.age);
*/







/*
const calculator = (() => {
	const sum = (a, b) => a + b;
	const sub = (a, b) => a - b;
	const mul = (a, b) => a * b;
	const div = (a, b) => a / b;
	function _privateMethod() {
		console.log('Hello world');
	};
	return {
		sum,
		sub,
		mul,
		div,
		publicMethod: function() {
			console.log('Hello world');
		}
	};
})();

console.log(calculator.sum(3,5));
console.log(calculator.sub(3,5));
console.log(calculator.mul(3,5));
console.log(calculator.div(3,5));
calculator._privateMethod();














const myModule = (() => {
	'use strict';

	let _privateProperty = 'Hello World';
	let publicProperty = 'I`m a public property';

	function _privateMethod() {
		console.log(_privateProperty);
	}

	function publicMethod() {
		_privateMethod();
	}

	return {
		publicMethod: publicMethod,
		publicProperty: publicProperty,
		_privateMethod: _privateMethod,
		_privateProperty: _privateProperty
	};
})();

myModule.publicMethod();
console.log(myModule.publicProperty);
console.log(myModule._privateProperty);
myModule._privateMethod();
*/










/*
class Animal {
	constructor(name, energy) {
		this.name = name;
		this.energy = energy;
	}
	eat(amount) {
		console.log(`${this.name} is eating.`);
		this.energy += amount;
	}
	sleep(length) {
		console.log(`${this.name} is sleeping`);
		this.energy += length;
	}
	play(length) {
		console.log(`${this.name} is playing`);
		this.energy -= length;
	}
	static nextToEat(animals) {
		const sortedByLeastEnergy = animals.sort((a, b) => {
			return a.energy - b.energy;
		});

		return sortedByLeastEnergy[0].name
	}
};
*/


/*
function Animal (name, energy) {
  if (this instanceof Animal === false) {
  	return new Animal(name, energy);
  }

  this.name = name
  this.energy = energy

}
Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}
Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}
Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}



const leo = new Animal('Leo', 7) 
const snoop = new Animal('Snoop', 10)

for (let key in leo) {
	if (leo.hasOwnProperty(key)) {
		console.log(`Key: ${key}. Value: ${leo[key]}`);
	}
}

for (let key in snoop) {
	if (snoop.hasOwnProperty(key)) {
		console.log(`Key: ${key}. Value: ${snoop[key]}`);
	}
}
*/

/*
let animal = {
	eats: true,
	name: 'White rabbit',
	'Hello': 'Hi',
	29: true,
};

let rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(Object.keys(rabbit));

for (let prop in rabbit) {
	let isOwn = rabbit.hasOwnProperty(prop);

	if (isOwn) {
		console.log(`Our: ${prop}`)
	} else {
		console.log(`Inherited: ${prop}`)
	}
}

*/

/*
let user = {
	name: 'Jhon',
	surname: 'Smith',

	set fullName(value) {
		[this.name, this.surname] = value.split(' ');
	},

	get fullName() {
		return `${this.name} ${this.surname}`
	}
}

let admin = Object.create(user);
admin.isAdmin = true;

console.log(admin.fullName);

admin.fullName = 'Alicia Cooper';

console.log(admin.fullName);
console.log(user.fullName);

*/
/*
const animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

const rabbit = Object.create(animal);
rabbit.walk = function() {
	console.log("Rabbit! Bounce-bounce!");
}


const longEar = Object.create(rabbit);
longEar.earLength = 10;



animal.walk();
longEar.walk();

*/

/*function Hero(name, level) {
	this.name = name
	this.level = level
}

function Warrior(name, level, weapon) {
	Hero.call(this, name, level)

	this.weapon = weapon
}

function Healer(name, level, spell) {
	Hero.call(this, name, level)

	this.spell = spell
}

Hero.prototype.greet = function() {
	console.log(`${this.name} says 'Hello'.`);
}

Warrior.prototype.attack = function() {
	console.log(`${this.name} attacks with the ${this.weapon}`);
}

Healer.prototype.heal = function() {
	console.log(`${this.name} casts ${this.spell}`);
}

let hero1 = new Warrior('Bjorn', 1, 'axe');
let hero2 = new Healer('Kanin', 1, 'cure');

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

console.log(hero1);
console.log(hero2);

hero1.greet();
hero1.attack();

hero2.greet();
hero2.heal();
*/

/*
const playerOne = {
	name: 'tim',
	maker: 'X'
};

const playerTwo = {
	name: 'jenn',
	maker: 'O'
};
*/
/*
function Player(name, marker) {
  this.name = name
  this.marker = marker
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);

console.log(player1.valueOf());

console.log(player1.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));
*/

/*
function Person(name) {
	this.name = name
}

Person.prototype.sayName = function() {
	console.log(`Hello, i'm ${this.name}`);
}

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

Player.prototype.getMarker = function() {
	console.log(`My maker is '${this.marker}'`)
}

console.log(Object.getPrototypeOf(Player.prototype));
console.log(Object.setPrototypeOf(Player.prototype, Person.prototype));
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player('steve', 'X');
const player2 = new Player('alse steve', '0');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();



//////////////////////////////////////////////////////////////////////////



function Hobbit(author, title, pages, read) {
	this.author = author
	this.title = title
	this.pages = pages
	this.read = read
}

const infoTheHobbit = new Hobbit('J.R.R Tolkien', 'The Hobbit', '195', 'not read yet');

Hobbit.prototype.getInfo = function() {
	console.log(`${this.title} by ${this.author}, pages ${this.pages}, ${this.read}`);
}

//let myData = prompt('Write the title for Tolkien´s book', 'The Hobbit');

infoTheHobbit.getInfo();
*/