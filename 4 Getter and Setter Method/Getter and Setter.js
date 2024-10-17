/* Getter and Setter Method

Getter means kono value set kora(kono value get kore ber kore nte aste pari) & Setter means kono value set(notun kono vlaue set korte prbo) kora

*/

class Product{
  
  set SetPrice(value){
    this.price = value;
  }

  get GetPrice() {
    return this.price;
  }

}


let ProductObj = new Product();

ProductObj.SetPrice = 100;

console.log(ProductObj);

console.log(ProductObj.GetPrice);