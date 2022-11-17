
// 1 -------------------------------
        	/*False*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new Employee('DUEIN');
let user2 = new Employee('PETRIK');

console.log(user1 === user2); 


// 2 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new Employee('DUEIN');
let user2 = new Employee('PETRIK');

console.log(user1 === user1);


// 3 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new Employee('DUEIN');
let user2 = new Employee('PETRIK');

console.log(user1 === user2);


// 4 -------------------------------
			/*False*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new Employee('DUEIN');
let user2 = new Employee('PETRIK');

console.log(user1 !== user1);


// 5 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new Employee('DUEIN');
let user2 = user1;

console.log(user1 === user2);


// 6 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new Employee('DUEIN');
let user2 = new Employee('PETRIK');

console.log(user1 !== user2);


// 7 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new Employee('DUEIN');
let user2 = user1;
user2.name = 'PETRIK';

console.log(user1 === user2);