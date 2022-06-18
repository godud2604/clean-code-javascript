// Primitive vs Reference
// => Primitive 타입은 type을 감별하기 쉽지만, Reference 타입은 type을 감별하기 어렵다. (프로토타입 체인의 성질때문에 Reference 타입의 최상위는 결국 Object이다.)
// => javascript는 동적으로 변하는 언어 => typeof와 instanceof로 Reference타입의 type까지 동적으로 감별하기 어렵다.
// => Object.prototype.toString.call() 을 이용하여 Reference타입의 type을 검사하는 방법도 있다..

// 🔥 Primitive
console.log(typeof ('문자열')) // string
console.log(typeof undefined) // undefined
console.log(typeof 123) // number
console.log(typeof Symbol()) // symbol

// 🔥 Reference
function myFunc() {}
class MyClass {}
const str = new String('문자열')
console.log(typeof myFunc); // function
console.log(typeof MyClass); // function
console.log(typeof str); // object

console.log(typeof null); // object => javascript의 언어적인 오류

// 🔥 instanceof (연산자) => 객체의 프로토타입 체인을 검사
function Person(name, age) {
    this.name = name
    this.age = age
}

const p = {
    name: 'poco',
    age: 99
}

const poco = new Person('poco', 99)
console.log(poco instanceof Person) // true
console.log(p instanceof Person) // false

const arr = []
const func = function() {}
const date = new Date()
console.log(arr instanceof Array); // true
console.log(func instanceof Function); // true
console.log(date instanceof Date); // true

// 결국, Reference타입이기 때문에 최상위는 Object이다. (프로토타입 체인을 타기때문에)
console.log(arr instanceof Object); // true
console.log(func instanceof Object); // true
console.log(date instanceof Object); // true

// 🔥 typeof와 instanceof 으로는  Reference타입의 type을 검사하기 힘들다. 따라서 역으로 Object 프로토타입 체인의 성질을 이용하여 Reference타입의 type을 검사
console.log(Object.prototype.toString.call('')) // [object String]
console.log(Object.prototype.toString.call(new String(''))) // [object String]
console.log(Object.prototype.toString.call(arr)) // [object Array]
console.log(Object.prototype.toString.call(date)) // [object Date]
console.log(Object.prototype.toString.call(func)) // [object Function]