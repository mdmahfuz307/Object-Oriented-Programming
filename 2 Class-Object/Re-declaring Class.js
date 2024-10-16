/* A class can  be declared once only. IF we to declare class more 
than one time it throws an error


class Person{
  num1 = 10;
  num2 = 20;

  addTwoNum(){
    return this.num1 + this.num2;
  }
}

class Person{
  num1 = 10;
  num2 = 20;

  addTwoNum(){
    return this.num1 + this.num2;
  }
}

let PersonObj = new Person();
console.log(PersonObj.num1);

*/


// Another way to define a class is by using a class expression but aita tew error deba

let Person = class{
  num1 = 100;
  num2 = 300;

  addTwoNum(){
    return this.num1 + this.num2;
  }
}


let Person = class{
  num1 = 10;
  num2 = 2;

  addTwoNum(){
    return this.num1 + this.num2;
  }
}

let PersonObj = new Person();
console.log(PersonObj);