import React from 'react';
import { color } from '../../../styles/color';
import styled from 'styled-components';
import StyledButton from '../../../components/CommonStyled/StyledButton';

const MainBenefit = () => {
  return (
    <div>
      <Container>
        <Inner>
          <Benefit>
            필링의 혜택! <br /> 지금 받으세요.
          </Benefit>
          <CoverStyledButton>지금 시작하기</CoverStyledButton>
        </Inner>
      </Container>
    </div>
  );
};

const Container = styled.section`
  position: relative;
  margin-top: 80px;
  background: #ffa221;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 110px 25px 100px 20px;
  text-align: center;
`;

const Benefit = styled.p`
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
`;

const CoverStyledButton = styled(StyledButton)`
  margin-top: 30px;
  background: ${color.black};
`;

export default MainBenefit;
