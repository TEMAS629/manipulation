class Employee {
    age;
    name;
    salary;
    check() {
		  return "пора тягать железо!" ;
	  }
}

let user = new Employee;
user.age = 25;
user.name = 'DUEIN SKALA';
user.salary = 150000;

console.log(user.check());