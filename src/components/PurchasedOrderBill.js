import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: ${(props) => props.showComponent ? 'block' : 'none' }
    border: 1px solid LIGHTSEAGREEN;
    width: 30%;
    margin-left: 10px;
`;

const Header = styled.h1`
`;

const BillDetails = styled.div`
`;

const BillingItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ItemNameHeader = styled.div`
  width: 40%;
  text-align: left;
  margin-left: 30px;
  font-weight: bold;
`;

const ItemQuantityHeader = styled.div`
  width: 20%;
  text-align: centre;
  font-weight: bold;
`;

const ItemRateHeader = styled.div`
  width: 20%;
  text-align: centre;
  font-weight: bold;
`;

const ItemAmountHeader = styled.div`
  width: 20%;
  text-align: centre;
  font-weight: bold;
`;

const ItemName = styled.div`
  width: 40%;
  text-align: left;
  margin-left: 30px;
`;

const ItemQuantity = styled.div`
  width: 20%;
  text-align: centre;
`;

const ItemRate = styled.div`
  width: 20%;
  text-align: centre;
`;

const Amount = styled.div`
  width: 20%;
  text-align: centre;
  font-weight: bold;
`;

const TotalAmountLabel = styled.div`
  width: 80%;
  text-align: end;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ItemTotalPrice = styled.div`
  width: 20%;
  text-align: centre;
  font-size: 1.2rem;
  font-weight: bold;
`;

const DividerLine = styled.hr`
    background-color: #000;
    width: 90%;
    margin-top: 20px;
`;

function PurchasedOrderBill({ purchasedOrderList }) {
    const getTotal = () => {
        return purchasedOrderList.reduce((accumulator, currentVal)=> {
            return currentVal.quantity > 1
              ? accumulator + currentVal.price * currentVal.quantity
              : accumulator + currentVal.price;
        }, 0);
    }

  return (
    <Container showComponent={purchasedOrderList.length > 0}>
      <Header>Purchased Bill</Header>
      <BillDetails>
        <BillingItem>
          <ItemNameHeader>Item</ItemNameHeader>
          <ItemRateHeader>Rate</ItemRateHeader>
          <ItemQuantityHeader>Qty</ItemQuantityHeader>
          <ItemAmountHeader>Amount</ItemAmountHeader>
        </BillingItem>
        {purchasedOrderList &&
          purchasedOrderList.length > 0 &&
          purchasedOrderList.map((item) => {
            return (
              <BillingItem key={item.id}>
                <ItemName>{item.name}</ItemName>
                <ItemRate>{item.price}</ItemRate>
                <ItemQuantity>{item.quantity}</ItemQuantity>
                <Amount>{item.price * item.quantity}</Amount>
              </BillingItem>
            );
          })}
        <DividerLine />
        <BillingItem>
          <TotalAmountLabel>Total Amount</TotalAmountLabel>
          <ItemTotalPrice>{getTotal()}</ItemTotalPrice>
        </BillingItem>
      </BillDetails>
    </Container>
  );
}

export default PurchasedOrderBill;
