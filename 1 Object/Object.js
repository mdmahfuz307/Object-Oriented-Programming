//Object Literal
let person = {

  //Properties
  first_name: 'Mahfuz',
  last_name: 'Nirob',

  //method
  getName:()=> {
      return (`The name of the person is ${person.first_name} ${person.last_name}`)
  }

}

console.log(person);
console.log(person.getName());  // Access the getName function and print this

