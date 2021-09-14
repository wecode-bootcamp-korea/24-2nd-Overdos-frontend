import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const MainFooter = () => {
  return (
    <Footer>
      <Container>
        <Nav>
          <NavUl>
            <NavLi>이용약관</NavLi>
            <NavLi>개인정보처리방침</NavLi>
            <NavLi>고객센터</NavLi>
          </NavUl>
          <NavUl>
            <NavRightLi>
              <i className="fab fa-instagram"></i>
            </NavRightLi>
            <NavRightLi>
              <i className="fab fa-facebook-f"></i>
            </NavRightLi>
            <NavRightLi>
              <i className="fab fa-blogger"></i>
            </NavRightLi>
          </NavUl>
        </Nav>
        <Content>
          <ContentPilly>
            <ContentPillyTitle>Filling</ContentPillyTitle>
            <ContentPillyPtag>
              (주)오버도즈 | 사업자번호: 123-45-67890 | 대표: 김영호
            </ContentPillyPtag>
            <ContentPillyPtag>개인정보취급담당자: 최현수</ContentPillyPtag>
            <ContentPillyPtag>
              서울특별시 강남구 테헤란로 427, 3층 | 연구소: 서울특별시 강남구
              테헤란로 427, 3층
            </ContentPillyPtag>
            <ContentPillyPtag>
              통신판매업신고: 제 2020-서울강남-03029 호
              <ContentPillySpan>사업자정보확인</ContentPillySpan>
            </ContentPillyPtag>
            <ContentPillyPtag>
              유통판매업신고: 제 2018-0107314 호
            </ContentPillyPtag>
            <ContentPillyPtag>
              건강기능식품판매업신고: 제 2018-0107318 호
            </ContentPillyPtag>
          </ContentPilly>
          <ContentCs>
            <ContentPillyTitle>고객센터</ContentPillyTitle>
            <ContentPillyPtag>
              고객문의: cs@overdose.us | 전화: 02-1234-5678
            </ContentPillyPtag>
            <ContentPillyPtag>
              상담시간: 평일 10:00~17:00 (점심시간 12:00~14:00)
            </ContentPillyPtag>
            <ContentPillyPtag>
              제휴문의: marketing@overdose.us | 전화: 02-1234-5678
            </ContentPillyPtag>
          </ContentCs>
        </Content>
        <CopyRight>ⓒ Overdose Inc. All Rights Reserved.</CopyRight>
      </Container>
    </Footer>
  );
};

const Footer = styled.footer`
  background: #fafafa;
`;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 25px 50px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li`
  margin-left: 30px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;

const NavRightLi = styled(NavLi)`
  font-size: 24px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
  padding: 18px 0;
  border-top: 1px solid ${color.LIGHTGRAY};
  border-bottom: 1px solid ${color.LIGHTGRAY};
  font-size: 12px;
  line-height: 2.3;
`;

const ContentPilly = styled.div``;

const ContentCs = styled.div`
  margin-right: 50px;
`;

const ContentPillyTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const ContentPillyPtag = styled.p`
  font-size: 12px;
`;

const ContentPillySpan = styled.span`
  margin-left: 3px;
  font-size: 11px;
  border-bottom: solid 1px ${color.BLACK};
  cursor: pointer;
`;

const CopyRight = styled(ContentPillyPtag)`
  padding: 18px 0 25px;
`;

export default MainFooter;
