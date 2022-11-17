class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('maga'),
	new Employee('daga'),
	new Student('4aga'),
	new Employee('mrak'),
	new Student('smeg'),
	new Employee('orel'),
	new Student('kisa'),
];

for(elems in users){
  if(users[elems] instanceof Employee){
    console.log(users[elems]);
  }
}
