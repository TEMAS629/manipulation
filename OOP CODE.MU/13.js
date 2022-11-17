class Employee {
	#name;
	#age;
	#salary;
	
	  constructor(name, age, salary) {
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  show() {
		  return this.#name + ', ' + this.#age + ' years old, salary: ' + this.#salary;
	  }
  }
  
  let user = new Employee('DUEIN', 22, 150000);
  
  console.log(user.show());