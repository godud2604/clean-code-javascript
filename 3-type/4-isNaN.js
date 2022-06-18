console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isInteger);

// 🔥 isNaN (is Not A Number) => 숫자가 아니다.
// => 뒤집어서 결과가 나오기 때문에 헷갈릴 수 있다.
// => ES2015+ 부터 isNaN는 "느슨한 검사", Number.isNaN는 "엄격한 검사"로 바뀌었음
// => Number.isNaN 을 사용하는 것이 안전하다.

console.log(Number.isNaN(123)); // false  (숫자가 숫자가 아니다 => 숫자가 맞다.)

console.log(Number.isNaN(123 + '테스트')); // false
console.log(typeof (123 + '테스트')); // string