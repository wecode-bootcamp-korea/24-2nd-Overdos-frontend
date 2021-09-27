import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuTitle from '../CommonComponent/MenuTitle';
import NoContent from '../CommonComponent/NoContent';

const HealthSurvey = () => {
  const [contentList, setContentList] = useState();

  useEffect(() => {
    setContentList([
      { id: 1, date: '2021.09.22', items: ['밀크씨슬', '마그네슘'] },
      { id: 2, date: '2021.09.22', items: ['마그네슘'] },
    ]);
  }, []);

  return (
    <>
      <MenuTitle title={'건강설문관리'} />
      {contentList ? (
        <>
          {contentList.map(data => (
            <SurveyContent key={data.id}>
              <SurveyDate>{data.date}</SurveyDate>
              <RecommendedProducts>{data.items.join(' ')}</RecommendedProducts>
            </SurveyContent>
          ))}
        </>
      ) : (
        <NoContent listName={'건강설문'} />
      )}
    </>
  );
};

export default HealthSurvey;

const SurveyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 95px;
  margin-top: -1px;
  font-size: 16px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
`;

const SurveyDate = styled.div`
  font-size: 14px;
  color: #848484;
`;

const RecommendedProducts = styled.div`
  margin-top: 4px;
  font-size: 20px;
`;
