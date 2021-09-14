import React from 'react';
import styled from 'styled-components';

const MainEffect = () => {
  return (
    <div>
      <Container>
        {EffectData.map((data, idx) => {
          return (
            <EffectContainer key={idx}>
              <EffectImg src={data.image} />
              <EffectDescription>{data.description}</EffectDescription>
            </EffectContainer>
          );
        })}
      </Container>
    </div>
  );
};

const Container = styled.section`
  position: relative;
  background: #ffffff;
`;

const EffectContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 100px 20px 0 20px;
`;

const EffectImg = styled.img`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const EffectDescription = styled.p`
  margin: 40px -20px 0 -20px;
  padding: 0 20px;
  font-size: 24px;
  line-height: 1.4;
`;

const EffectData = [
  {
    image: '/images/suggest.jpeg',
    description:
      '국내 연구진의 전문적인 연구결과를 기반으로 개발자의 생활 습관을 고려한 건강설문 시스템을 만들었어요. 우리 몸에 꼭 맞는 영양성분을 추천해요.',
  },
  {
    image: '/images/natural.jpeg',
    description:
      '필링 영양제는 우수한 품질의 원료를 직접 선택하여, 엄격한 기준의 품질관리를 통해 만들었어요. 믿고 섭취할 수 있는 영양제를 만나보세요.',
  },
];

export default MainEffect;
