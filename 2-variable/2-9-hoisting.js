// 호이스팅
// => 런타임 시(프로그램이 동작할 때), 선언과 할당이 분리된 것

var global = 0;

function outer() {
  console.log(global); // undefined
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();

  global = 1;
  
  console.log(global); // 1
}

function duplicatedVar() {
  var a;

  console.log(a); // unde

  var a = 100;

  console.log(a); // 100
}
