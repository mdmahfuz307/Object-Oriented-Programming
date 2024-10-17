/* Static keyword Without creating any object ekta class takhe sora sori tar jei proparties royese je gulo k sora sori access kora jai

*/


class Person {

  //Properties
  static first_name='Mahfuz'  // ai khane static use korate ata objcet create carai access korte prbo
  static last_name='Nirob'

  //method
  static getName() {
      return (`The name of the person is ${this.first_name} ${this.last_name}`)
  }

}

console.log(Person.first_name);

console.log(Person.last_name);

console.log(Person.getName());


/* jodi amra dekhi ekta class er vitor onk gula properties ekn amk j kono ekta k 
nye kaj krte hbe tokhon oi ekta properties er jrno amra object create na kore oi 
properties er samne ai (static) keyword use krte pari
*/