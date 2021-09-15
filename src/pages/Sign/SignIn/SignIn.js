import React, { useState } from 'react';
import styled from 'styled-components';
import SignInInputBox from './SignInInputBox';
import { SIGN_UP_DATA } from './data';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signIn = e => {
    e.preventDefault();
    fetch('http://172.30.41.223:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const kakaoSignIn = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj.access_token);
        fetch('http://172.30.41.223:8000/users/kakaologin', {
          method: 'POST',
          headers: { Authorization: authObj.access_token },
          // body: JSON.stringify({
          //   Authorization: `Bearer ${authObj.code}`,
          // }),
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('Kakao_token', res.access_token);
            console.log(res.access_token);
            if (res.access_token) {
              alert('Filling에 오신걸 환엽합니다!');
              history.push('/');
            }
          });
      },
    });
  };

  const goSignUp = () => {
    history.push('/signup');
  };

  return (
    <CenterAlignment>
      <SignInForm>
        <Title>Filling</Title>
        <InputBoxForm>
          {SIGN_UP_DATA.map((data, index) => {
            return (
              <SignInInputBox key={index} data={data} onChange={onChange} />
            );
          })}
          <SignInButton onClick={signIn}>로그인</SignInButton>
          <KakaoSigninButton onClick={kakaoSignIn}>
            카카오 로그인
          </KakaoSigninButton>
          <CenterAlignment>
            <LightFont>비밀번호 찾기</LightFont>
            <LightFont onClick={goSignUp}>회원가입</LightFont>
          </CenterAlignment>
        </InputBoxForm>
      </SignInForm>
    </CenterAlignment>
  );
};

export default SignIn;

const Title = styled.h1`
  margin: 0 auto;
  padding: 50px 0px 30px 0px;
  font-size: 34px;
`;

const CenterAlignment = styled.div`
  display: flex;
  justify-content: center;
`;

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 460px;
`;

const InputBoxForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignInButton = styled.button`
  height: 50px;
  margin: 20px 0px 20px 0px;
  border-radius: 300px;
  background-color: #ff5c36;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const KakaoSigninButton = styled(SignInButton)`
  background-color: #ffcc02;
  color: black;
`;

const LightFont = styled.div`
  margin: 0px 5px;
  color: #ababab;
  font-size: 16px;
  cursor: pointer;
`;
