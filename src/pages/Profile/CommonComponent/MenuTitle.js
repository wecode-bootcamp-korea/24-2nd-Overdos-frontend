import React from 'react';
import styled from 'styled-components';

const MenuTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default MenuTitle;

const Title = styled.div`
  width: 100%;
  height: 40px;
  font-size: 28px;
  margin-bottom: 30px;
`;
