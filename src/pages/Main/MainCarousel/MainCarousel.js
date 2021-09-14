import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import CAROUSEL_ITEMS from './data';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
};

const MainCarousel = () => {
  return (
    <Container>
      <Inner>
        <Worries>그 동안 고민 많았죠?</Worries>
        <CarouselContainer>
          <StyledSlider {...settings}>
            {CAROUSEL_ITEMS.map(item => {
              return (
                <WorriesContainer key={item.id}>
                  <Image src={item.url} />
                  <Review>{item.review1}</Review>
                  <Review>{item.review2}</Review>
                </WorriesContainer>
              );
            })}
          </StyledSlider>
        </CarouselContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  margin-top: -5px;
  background: #ecd7c4;
  color: ${color.black};
`;

const Inner = styled.div`
  padding: 100px 25px 120px 20px;
  text-align: center;
`;

const Worries = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const CarouselContainer = styled.div`
  margin-bottom: 50px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const WorriesContainer = styled.div``;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 80px auto 30px auto;
`;

const Review = styled.p`
  margin-top: 12px;
  font-size: 48px;
  font-weight: 700;

  &: last-child {
    margin-bottom: 30px;
  }
`;

export default MainCarousel;
