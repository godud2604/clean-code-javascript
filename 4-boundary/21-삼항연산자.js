// 3개의 피연산자
// 조건 ? 참 : 거짓
function example() {
  return condition1 ? value1
    : condition2 ? value1
    : condition3 ? value1
    : value4;
}

function example_if() {
  if (condition1) { return value1 }
  else if (condition2) { return value2 }
  else if (condition3) { return value3 }
  else { return value4 }
}

// ⭕️ best
function example_switch() {
  const temp = 
  switch (key) {
    ...
  }
}



