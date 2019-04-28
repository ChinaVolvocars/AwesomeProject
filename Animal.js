export default class Animal {


  constructor(name, age) {
    this.name = name;
    this.age = age;

  }


  getDes() {
    return '动物名称：' + this.name + ' 大小：' + this.age
  }
}