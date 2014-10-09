// let's define a white duck in our world
var duck = { color: 'white' };

// and allow it to speek
duck.speek = function() {
	console.log("Quack quack!");
}

// speek, duck, speek!
duck.speek();

// ok, I don't like this duck, let's define a new one instead
var duck = {};

// a duck that can say its name - a smarter duck
duck.speek = function() {
	console.log("Hi, my name is " + this.myName);
}

// c'mon duck, say your name
duck.speek();

// let's call the duck Daisy
duck.myName = 'Daisy';

// say your name, again, duck!
duck.speek();

// our world needs to speek by its own
var speek = duck.speek;

// speek! who? doesn't matter, just speek!
speek();

// ok, I need a pig too
var pig = { myName: 'Geraldine' };

// pig, you don't have the ability to speek, but you shall speek this time only!
speek.call(pig);
speek.apply(pig);

// pig, you shall speek!
pig.speek = speek;
pig.speek();

// a cavie that actually wants to be a pig
cavie = {};
cavie.speek = speek.bind(pig);
cavie.speek();

// ************
// ************
// ************

// ok, ok, duck, you seems to have some extraordinary abilities that I have not defined
console.log(duck.toString());

// I want all the animals in my world to be white
Object.prototype.color = 'white';

// all, tell me your color!
console.log(pig.color);
console.log(cavie.color);
console.log(duck.color);

// cavie, you seem to try so hard to be like the pig?
var cavie = Object.create(pig);

// who meanwhile changed its color
pig.color = 'pink';

// Cavie, you even changed you color to pink? What a pig you are!
console.log(cavie.color);

// ************
// ************
// ************

// Ok, now I want a pig factory
var Pig = function(color, name) {
	this.color = color;
	this.name = name;
}

// and a bunch of new pigs
var geraldine = new Pig('purple', 'geraldine');
var josephine = new Pig('white', 'josephine');

// who are you, pigs?
console.log(geraldine.name, geraldine.color);
console.log(josephine.name, josephine.color);

// All my pigs shall speak!
Pig.prototype.speek = function() {
	console.log("Hi, I am a pig called " + this.name);
}

// talk to me, pigs!
geraldine.speek();
josephine.speek();

// All my creations should run!
Object.prototype.run = function() {
	console.log(this.name + ' is running!');
}

// run, pigs, run!
geraldine.run();
josephine.run();

// Ok, now I want a pig factory. My cavies will be almost like pigs. 
var Cavie = function(color, name) {
	Pig.call(this, color, name);
}

Cavie.prototype = Object.create(Pig.prototype);
Cavie.prototype.fur = 'long';

// Finally, creating the juji cavie :)
var juji = new Cavie('orange', 'juji');
juji.speek();
juji.run();
console.log(juji.fur);