class User{
    
}
class Employe extends User {
  setYear(year) {
    if (year.lenght > 0) {
     this.year = year;
  } else{
    throw new Error ('year lenght error')
}
getYear() {
    return this.salary;

  }
}
}

let year = new Employe();
year.setSalary(5000);
let year = year.getSalary();

console.log(year);