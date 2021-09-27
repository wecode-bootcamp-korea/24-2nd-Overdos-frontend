import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LoginAndOut from './LoginAndOut';
import { MENU_LIST } from './data';

const Nav = () => {
  const [selectNavMenu, setSelectNavMenu] = useState(0);
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  const goMenu = data => {
    history.push(data.push);
    setSelectNavMenu(data.id);
  };

  const goLogin = () => {
    history.push('/signin');
    setSelectNavMenu(5);
  };

  console.log(localStorage.getItem('username'));
  return (
    <NavWrapper>
      <NavContent>
        <Logo onClick={goHome}>Filling</Logo>
        <NavMenuList>
          {MENU_LIST.map(data => (
            <NavMenu
              key={data.id}
              id={data.id}
              selectNavMenu={selectNavMenu}
              onClick={() => goMenu(data)}
            >
              {data.title}
            </NavMenu>
          ))}
          <LoginAndOut selectNavMenu={selectNavMenu} goLogin={goLogin} />
        </NavMenuList>
      </NavContent>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
`;

const Logo = styled.div`
  color: #f79200;
  font-size: 30px;
  font-weight: 700;
  font-family: ‘VT323’, monospace;
  letter-spacing: -7px;
  cursor: pointer;
`;

const NavMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 576px;
`;

const NavMenu = styled.div`
  padding-bottom: 3px;
  border-bottom: ${props =>
    props.id === props.selectNavMenu && '1px solid black'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
