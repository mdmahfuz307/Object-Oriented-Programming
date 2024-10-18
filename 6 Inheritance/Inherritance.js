class Father{

    //Properties
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