import React from 'react';
import styled from 'styled-components';

const LoginAndOut = ({ selectedNavMenu, goMenu }) => {
  const logOut = () => {
    alert('로그아웃이 완료되었습니다.');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_token');
  };

  return (
    <LoginAndOutWrapper
      selectedNavMenu={selectedNavMenu}
      onClick={() => (localStorage.getItem('user_name') ? logOut() : goMenu())}
    >
      {localStorage.getItem('user_name') ? '로그아웃' : '로그인'}
    </LoginAndOutWrapper>
  );
};

export default LoginAndOut;

const LoginAndOutWrapper = styled.div`
  padding-bottom: 3px;
  border-bottom: ${props => props.selectedNavMenu === 6 && '1px solid black'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
