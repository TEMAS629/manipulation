class Employee {
    age;
    name;
    salary;
}

let user1 = new Employee;
let user2 = new Employee;
let user3 = new Employee;
let sum = 0;

user1.age = 25;
user1.name = 'DUEIN SKALA';
user1.salary = 150000;

user2.age = 67;
user2.name = 'GABEN';
user2.salary = 3000000;

user3.age = 15;
user3.name = 'MITCHEL';
user3.salary = 1800;

sum += user1.salary + user2.salary + user3.salary;

console.log(sum);