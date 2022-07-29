/**
 * AND
 */
true && true && '도달 O'
true && false && '도달 X'

/**
 * OR
 */
false || false || '도달O'
true || true || '도달X'

function fetchData() {
  // 💩 if-else
  if (state.data) {
    return state.data;
  } else {
    return 'Fetching';
  }

  // 💩 삼항 연산자
  return state.data ? state.data || 'Fetching...'

  // 👍 단축 평가
  return state.data || 'Fetching...'
}

/************************************************************************/

function favoriteDog(someDog) {
  // 💩 임시 변수를 생성할 필요 없다.
  let favoriteDog;

  if (someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = '냐옹';
  }

  return favoriteDog + '입니다';

  // 👍 단축 평가
  return (someDog || '냐옹') + '입니다';
}

favoriteDog() // => 냐옹
favoriteDog('포메') // => 포메 입니다

/************************************************************************/

function getActiveUserName(user, isLogin) {
  // 💩 
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name
      } else {
        return '이름없음'
      }
    }
  }

  // 💩
  if (isLogin && user) {
    if (user.name) {
      return user.name
    } else {
      return '이름없음'
    }
  }

  // 👍 단축 평가
  if (isLogin && user) {
    return user.name || '이름없음'
  }
}