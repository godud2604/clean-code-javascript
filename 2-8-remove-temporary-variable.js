// 💩 Bad
function getObject() {
  const result = {} // 💩 임시 객체

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');

  return result;
}
// 👍 Goood
function getObject() {
  return {
    title : document.querySelector('.title');
    text : document.querySelector('.text');
    value : document.querySelector('.value');
  };
}

// 💩 Bad
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : '0' + month
  day = day >= 10 ? day : '0' + day
  hour = hour >= 10 ? hour : '0' + hour

  return {
    month, day, hour
  };
}
// 👍 Goood
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month : month >= 10 ? month : '0' + month,
    day : day >= 10 ? day : '0' + day,
    hour : hour >= 10 ? hour : '0' + hour
  };
}
function getDateTimeKr() {
  const currentDateTime = getDateTime(new Date())
  const computedKrDate = (time) => time + '분 전'

  return {
    month: computedKrDate(currentDateTime.month),
    day: computedKrDate(currentDateTime.day),
    hour: computedKrDate(currentDateTime.hour)
  }
}

// 💩 Bad (명령형에 가까운 코드)
function getSomeValue(params) {
  let tempVal = ''

  for (let index = 0; index < array.length; index++) {
    temp = array[index];
    temp += array[index];
    temp += array[index];
    temp += array[index];
  }

  if (temp ??) {
    tempVal = ??
  } else if (temp ??) {
    temp += ??
  }

  return temp
}

// 임시 변수 제거 !
// 이유 ? 
// => 명령형으로 가득한 로직
// => 어디서 어떻게 ? 디버깅 힘든 코드
// => 추가적인 코드를 작성하기 쉬운 유혹 (let temp)
// 해결책 ?
// => 함수 나누기
// => 바로 반환 (return)
// => 고차함수 (map, filter, reduce)
// => 선언형 코드