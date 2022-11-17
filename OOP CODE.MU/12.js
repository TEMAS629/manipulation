class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	show_name() {
		return this.name;
	}
	show_salary() {
		return this.salary;
	}
	increase_salary() {
	  this.salary = this.salary + (this.salary/10);
	  return this.salary;
	}
}

let user = new Employee('DUEIN', 150000);

console.log(user.show_name());
console.log(user.show_salary());
console.log(user.increase_salary());