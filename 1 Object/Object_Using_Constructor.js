// Object by using constructor

/* kono ekta function use kore oi function er name dhore jokhon
kono object banabo tokhon object bananor oi ja proccess ta sei
proceess take bolbo constructor er mardhoma object toiri kora
*/

function person() {
  this.first_name = "Nirob"
  this.last_name = "Mahfuz"
  this.age =  24
  this.city = "Dhaka"
  this.isBangladesh = true
  this.getName = () => {
    return `My name ${this.first_name}  ${this.last_name}`
  }
}

let PersonInstance = new person();

console.log(PersonInstance) // print everything

console.log(PersonInstance.first_name)  //print ----> Nirob