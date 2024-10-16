/*



*/


class Person {
  //Properties
  first_name='Mahfuz'
  last_name='Nirob'
  age = 24
  isBangladesh = true

  //method
  getName() {
      return (`The name of the person is ${this.first_name} ${this.last_name}`)
  }
}


let PersonObj = new Person();

console.log(PersonObj); // Print everything

console.log(PersonObj.getName()); // Print function