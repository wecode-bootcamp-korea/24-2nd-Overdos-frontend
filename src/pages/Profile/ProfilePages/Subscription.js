import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuTitle from '../CommonComponent/MenuTitle';
import NoContent from '../CommonComponent/NoContent';

const Subscription = () => {
  const [subScriptionList, setSubScriptionList] = useState([]);
  useEffect(() => {
    //데이터 fetch
    setSubScriptionList([]);
  }, []);
  return (
    <>
      <MenuTitle title={'정기구독'} />
      {subScriptionList ? (
        <NoContent listName={'정기구독'} />
      ) : (
        <SubScriptionList>hi</SubScriptionList>
      )}
    </>
  );
};

export default Subscription;

const SubScriptionList = styled.div``;
