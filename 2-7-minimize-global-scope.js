// 전역 공간(최상위 공간) : window(브라우저), global(Node)
// 전역 공간을 더럽히지 않기
// => 이유? 어디서나 접근 가능, 스코프 분리 위험(런타임 환경에서는 분리가 되어있지 않다)

// => 애초에 전역 변수를 만들지 않는다. 지역 변수만 만든다.
// => window, global 영역을 조작하지 않는다
// => const, let으로만 바꾸어도 많은 부분들이 해소가 된다.
// => IIFE, Module, Closure 스코프를 나누는 방법에 대하여 깊은 고민 필요

var globalVar = 'global';

console.log(window.globalVar);
console.dir(window);

window.foo = 'bar'