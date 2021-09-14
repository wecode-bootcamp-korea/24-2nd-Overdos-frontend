import React from 'react';
import { color } from '../../../styles/color';
import styled from 'styled-components';
import StyledButton from '../../../components/CommonStyled/StyledButton';

const MainCover = () => {
  return (
    <Cover>
      <CoverTop />
      <CoverImg src="/images/mainCover.jpeg" alt="cover" />
      <CoverTitle>
        코드와 씨름하는 내 몸에 <br /> 필요한 영양성분 궁금하세요?
      </CoverTitle>
      <CoverDescription>
        개발자인 여러분만을 위한 맞춤영양제를 찾아보세요! <br /> 이미
        643,151명이 추천받았습니다.
      </CoverDescription>
      <CoverStyledButton>지금 시작하기</CoverStyledButton>
    </Cover>
  );
};

const Cover = styled.section`
  position: relative;
`;

const CoverTop = styled.div`
  height: 64px;
  background: #fac404;
  border-bottom: 1px solid red;
`;

const CoverImg = styled.img`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const CoverTitle = styled.div`
  position: absolute;
  top: 200px;
  left: 280px;
  color: ${color.black};
  font-size: 75px;
  font-weight: 700;
  line-height: 1.25;
`;

const CoverDescription = styled.div`
  position: absolute;
  top: 420px;
  left: 280px;
  color: ${color.black};
  font-size: 32px;
  line-height: 1.25;
`;

const CoverStyledButton = styled(StyledButton)`
  position: absolute;
  top: 540px;
  left: 280px;
  cursor: pointer;
`;

export default MainCover;
