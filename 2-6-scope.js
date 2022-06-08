var global = '전역'
if (global === '전역') { // var는 함수 단위인데, if는 함수 단위가 아니다. 
  var global = '지역'

  console.log(global); // 지역
}
console.log(global); // 지역

const person = {
  name: 'hy',
  age: 20
}
console.log(person);
person.name = 'ms'
person.age = 25
console.log(person);
