class Employee {
    age;
    name;
    salary;
    check(name, salary) {
		  return name + ', salary: ' + salary;
	  }
}

let user = new Employee;
user.age = 25;
user.name = 'DUEIN SKALA';
user.salary = 150000;


console.log(user.check(user.name, user.salary));