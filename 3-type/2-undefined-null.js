// undefined & null
// => undefined, null은 값이 없거나 정의되지 않은 것
// => null 의 경우 값이 없다는 것을 명시적으로 표현한 것
// => null 은 수학적으로 0 이고, undefined는 NaN 
// => type undefined : undefined
// => type null : object
// => 둘의 쓰임을 조심해야 한다.

console.log(!null); // true
console.log(!!null); // false
console.log(null === false); // false
console.log(!null === true); // true

console.log(!undefined); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(!undefined === !null); // true

// null은 수학적으로 0으로 취급된다.
console.log(null + 123); // 123
console.log(undefined + 123); // NaN

// 선언했지만 값은 정의되지 않고 할당 X
let verb;
console.log(typeof verb); // undefined

let verb2 = null
console.log(typeof verb2); // object

