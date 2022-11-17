class Position{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Department{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Employee {
	  constructor(name, position, department) {
		  this.name = name;
		  this.position = position;
		  this.department = department;
	  }
  }
  
  let position = new Position('SIETL');
  let department = new Department('IT-CORPORAITED');
  let user = new Employee('DUEIN', position, department);
  
  console.log(user.name);
  console.log(user.position.name);
  console.log(user.department.name);