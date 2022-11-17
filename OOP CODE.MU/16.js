class Employee {
	#name;
	#age;
	#salary;
	  constructor(name, age, salary) {
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  
	  getName() {
		  return this.#name;
	  }
	  getAge(){
	    return this.#age;
	  }
	  getSalary() {
		  return this.#salary;
	  }
  }

let user = new Employee('DUEIN', 25, 150000);

console.log(user.getName());
console.log(user.getAge());
console.log(user.getSalary());