const x = 1;
// 💩
if (x >= 0) {
  console.log('x는 0과 같거나 크다.');
} else if (x > 0) {
  console.log('x는 0보다 크다.');
}

// 💩
if (x >= 0) {
  console.log('x는 0과 같거나 크다.');
} else {
  if (x > 0) {
    console.log('x는 0보다 크다.');
  }
}

// 👍 (또는 switch문으로 변경)
if (x >= 0) {
  console.log('x는 0과 같거나 크다.');
} 
if (x > 0) {
  console.log('x는 0보다 크다.');
}

function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return '이름없음'
  }
}