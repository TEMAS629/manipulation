class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('DUEIN', 150000),
  new Employee('DUETL', 36000),
  new Employee('TRAMP', 123649),
  new Employee('BAIDEN', 768586)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}