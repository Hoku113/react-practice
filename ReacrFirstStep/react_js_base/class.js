// ウェブアプリとはまったく関係のないものです。
// jsの基本機能の勉強用

class Car {
    constructor(name){
      this.brand = name;
    }
  
    present(){
      return 'I have a ' + this.brand;
  
    }
  }
  
  class Model extends Car {
    constructor(name, mod){
      super(name);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model
    }
  }
  
  const mycar = new Model("Ford", "mustang")
  console.log(mycar.show())