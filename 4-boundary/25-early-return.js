// 💩
function loginService(isLogin, user) {
  if (!isLogin) { // 로그인 여부
    if (checkToken()) { // 토큰 존재 여부
      if (!user.nickname) { // 기가입 유저 확인 (가입 or 로그인 성공)
        return registerUser(user);
      } else {
        refreshToken();

        return '로그인 성공';
      }
    } else {
      throw new Error('No Token');
    }
  }
}

// 👍 Early Return: 함수를 미리 종료
function loginService(isLogin, user) {
  if (isLogin) {
    return
  }

  if (!checkToken()) {
    throw new Error('No Token')
  }

  if (!user.nickname) {
    return registerUser(user);
  }
}

function login() {
  refreshToken();

  return '로그인 성공';
}

