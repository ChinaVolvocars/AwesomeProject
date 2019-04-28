import Animal from './Animal'


export default class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }


  getDes() {
    return super.getDes();
  }
}