// π© Bad
function getObject() {
  const result = {} // π© μμ κ°μ²΄

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');

  return result;
}
// π Goood
function getObject() {
  return {
    title : document.querySelector('.title');
    text : document.querySelector('.text');
    value : document.querySelector('.value');
  };
}

// π© Bad
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
// π Goood
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
  const computedKrDate = (time) => time + 'λΆ μ '

  return {
    month: computedKrDate(currentDateTime.month),
    day: computedKrDate(currentDateTime.day),
    hour: computedKrDate(currentDateTime.hour)
  }
}

// π© Bad (λͺλ Ήνμ κ°κΉμ΄ μ½λ)
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

// μμ λ³μ μ κ±° !
// μ΄μ  ? 
// => λͺλ ΉνμΌλ‘ κ°λν λ‘μ§
// => μ΄λμ μ΄λ»κ² ? λλ²κΉ νλ  μ½λ
// => μΆκ°μ μΈ μ½λλ₯Ό μμ±νκΈ° μ¬μ΄ μ νΉ (let temp)
// ν΄κ²°μ± ?
// => ν¨μ λλκΈ°
// => λ°λ‘ λ°ν (return)
// => κ³ μ°¨ν¨μ (map, filter, reduce)
// => μ μΈν μ½λ