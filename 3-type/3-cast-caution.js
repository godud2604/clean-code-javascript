// 형변환 주의하기
// => 자바스크립트가 평가했을 때 암묵적인 형변환이 일어날 수 있다. 
// => 따라서 타입 변환 시 명시적인 변환을 사용하여 예측하기 쉬운 형변환을 활용하는 것이 좋다

// 🔥 암묵적 변환
console.log(11 + '문자와 결합'); // 11문자와 결합 
console.log(!!'문자열'); // true
console.log(!!''); // false


// 🔥 명시적 변환
console.log(String(11 + '문자와 결합')); // 11문자와 결합
console.log(Boolean('문자열')); // true
console.log(Boolean('')); // false
console.log(Number('11')); // 11

// parseInt 사용 시, 10진수를 명확하게 기재해주어야 함.
// parseInt의 기본 값이 10진수가 아니다.
console.log(parseInt('9.999', 10)); // 9