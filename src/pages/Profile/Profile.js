import React, { useState } from 'react';
import styled from 'styled-components';
import SelectedMenu from './SelectedMenu';
import ProfileAside from './ProfileAside';
// import { PROFILE_MENU_DATA } from './data';

const Profile = () => {
  const [profileMenu, setProfileMenu] = useState(0);
  const goProfileFirstMenu = () => {
    setProfileMenu(0);
  };
  const goProfileSelectedMenu = data => {
    setProfileMenu(data.id);
  };
  return (
    <ProfileWrapper>
      <ProfileContent>
        {/* <ProfileAside>
          <MyProfile onClick={() => setMenu(0)}>MY 필링</MyProfile>
          {PROFILE_MENU_DATA.map(data => (
            <ProfileMenu
              onClick={() => clickMenu(data)}
              key={data.id}
              id={data.id}
              menu={menu}
            >
              {data.menu}
            </ProfileMenu>
          ))}
        </ProfileAside> */}
        <ProfileAside
          goProfileFirstMenu={goProfileFirstMenu}
          goProfileSelectedMenu={goProfileSelectedMenu}
          profileMenu={profileMenu}
        />
        <SelectedMenu profileMenu={profileMenu} />
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 994px;
`;

// const ProfileAside = styled.aside`
//   display: flex;
//   flex-direction: column;
//   width: 160px;
// `;

// const ProfileMenu = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding-top: 25px;
//   font-size: 18px;
//   font-weight: ${props => props.id === props.menu && 700};
//   color: ${props => props.id === props.menu && '#FF5B35'};
//   cursor: pointer;
// `;

// const MyProfile = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 25px 0px;
//   border-top: 1px solid #adadad;
//   border-bottom: 1px solid #adadad;
//   font-size: 16px;
//   font-weight: 700;
//   cursor: pointer;
// `;
