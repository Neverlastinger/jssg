// iterating an array
[1, 2, 3].forEach(function(item) {
	console.log(item);
});

// creating an empty object
var obj = {};

// creating an object with properties
var obj = {
	prop1: 'value 1',
	prop2: 'value 2'
}

// adding a property to the obj
obj.prop = 'value';

// adding a property to the obj by name
var propName = 'prop';
obj[propName] = 'value';

// checking for an existance of a property
if (obj.prop) { 
	console.log(obj.prop);
}

// checking for an existance of a property by name
var propName = 'prop';
if (obj[propName]) { 
	console.log(obj[propName]);
}