class User{
    
}
class Employe extends User {
  setSalary(salary) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}
let employe = new Employe();
employe.setSalary(5000);
let salary = employe.getSalary();

console.log(salary);
