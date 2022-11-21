class user {
  setName(name) {
    this.name = "DUEIN";
  }
  getName() {
    return this.name;
  }
}
class Employe extends user {}
let employe = new Employe();
employe.setName("abama");
let name = employe.getName();
console.log(name);
