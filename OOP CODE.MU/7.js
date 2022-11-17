class Employee {
    name;
    salary;
    check() {
		  console.log(this.name);
		  console.log(this.salary);
	  }
}

let user = new Employee;
user.name = 'DUEIN SKALA';
user.salary = 150000;

user.check();