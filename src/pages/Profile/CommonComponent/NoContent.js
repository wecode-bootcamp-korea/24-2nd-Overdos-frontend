import React from 'react';
import styled from 'styled-components';

const NoContent = ({ listName }) => {
  return <MenuContent>{listName} 내역이 없습니다.</MenuContent>;
};

export default NoContent;

const MenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95px;
  font-size: 16px;
  color: #999999;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;
