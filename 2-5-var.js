// var : 함수 스코프
// let & const : 블록 단위 스코프
// => let은 재할당가능, TDZ(Temporal Dead Zone)

console.log(name); // undefined
var name = '이름'
var name = '이름2'
var name = '이름3'
var name = '이름4'
console.log(name); // 이름4

// console.log(temp); // TDZ
let temp;
console.log(temp); // undefined