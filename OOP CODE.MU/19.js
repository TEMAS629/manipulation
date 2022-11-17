class Employee {
	#name;
	#age;
	#salary;
	
	  setName(name) {
		  this.#name = name;
		  return this;
	  }
	  setAge(age){
	  	if (age > 0 & age < 120) {
			  this.#age = age;
			  return this;
		  } else {
			throw new Error('Неправильный возраст');
		  }
	  }
	  setSalary(salary) {
		  this.#salary = salary + '$';
		  return this;
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

let user = new Employee;
user.setName('DUEIN').setAge(25).setSalary(2000);

console.log(user.getName());
console.log(user.getAge());
console.log(user.getSalary());