import React from 'react';
import styled from 'styled-components';

const LoginAndOut = ({ selectNavMenu, goMenu }) => {
  const logOut = () => {
    alert('로그아웃이 완료되었습니다.');
    localStorage.removeItem('username');
  };

  return (
    <LoginAndOutWrapper
      selectNavMenu={selectNavMenu}
      onClick={() => (localStorage.getItem('username') ? logOut() : goMenu())}
    >
      {localStorage.getItem('username') ? '로그아웃' : '로그인'}
    </LoginAndOutWrapper>
  );
};

export default LoginAndOut;

const LoginAndOutWrapper = styled.div`
  padding-bottom: 3px;
  border-bottom: ${props => props.selectNavMenu === 5 && '1px solid black'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
