// Object By creating instance of Object

let person = Object()

  person.first_name = "Mahfuz"
  person.last_name = "Nirob"
  person.age = 24
  person.city = "Dhaka"
  person.isBangladesh = true

  person.getName = () => {
      return (`The name of the person is ${person.first_name} ${person.last_name}`)
  }

console.log(person.getName());