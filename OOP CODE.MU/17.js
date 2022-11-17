class Employee {
	#name;
	#age;
	#salary;
	
	  setName(name) {
		  this.#name = name;
	  }
	  setAge(age){
	    this.#age = age;
	  }
	  setSalary(salary) {
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

let user = new Employee;
user.setName('DUEIN');
user.setAge(25);
user.setSalary(150000)

console.log(user.getName());
console.log(user.getAge());
console.log(user.getSalary());