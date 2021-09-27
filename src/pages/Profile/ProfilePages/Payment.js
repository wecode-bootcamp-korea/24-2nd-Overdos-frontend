import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuTitle from '../CommonComponent/MenuTitle';
import NoContent from '../CommonComponent/NoContent';

const Payment = () => {
  const [paymentList, setPaymentList] = useState([]);
  useEffect(() => {
    //데이터 fetch
    setPaymentList([]);
  }, []);
  return (
    <>
      <MenuTitle title={'결제관리'} />
      {paymentList ? (
        <NoContent listName={'결제 내역'} />
      ) : (
        <PaymentList>hi</PaymentList>
      )}
    </>
  );
};

export default Payment;

const PaymentList = styled.div``;
