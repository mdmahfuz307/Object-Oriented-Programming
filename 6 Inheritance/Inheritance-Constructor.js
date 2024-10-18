// Constructor inside only parent class
// Constructor inside only parent class pass parameters

// Constructor inside only child class
// Constructor inside only child class pass parameters

// Constructor inside only parent & child class
// Constructor inside only parent & child class pass parameters



class Father{

  //Properties
  constructor(){
    console.log("I am a Constructor of Father class")
  }
  first_name='Mahfuz'
  last_name='Nirob'

  //method
  getName() {
    return (`The name of the person is ${this.first_name} ${this.last_name}`)
  }
}

class Son extends Father{

}

const SonObj = new Son();
console.log(SonObj.getName());