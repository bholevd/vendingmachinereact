import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DivBox = styled.div`
  border: 1px solid LIGHTSEAGREEN;
  height: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 2px;
  padding: 10px;
`;
const Img = styled.img`
  flex-grow: 1;
`;

const DivName = styled.div`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;
const DivPrice = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const DivStatus = styled.div`
  background-color: ${(props) => props.available ? "limegreen" : "MIDNIGHTBLUE"};
  width: 10px;
  height: 10px;
  padding: 5px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  vertical-align: middle;
  align-items: center;
`;

const TotalItems = styled.div`
  display: flex;
  justify-content: center;
  width: 50%
`;

const RemoveItem = styled.div`
  font-weight: bold;
  padding: 5px;
  border: 1px solid;
  width: 20px;
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: ${(props) => (props.available ? "pointer" : "arrow")};
  }
`;

const AddItem = styled.div`
  font-weight: bold;
  padding: 5px;
  border: 1px solid;
  width: 20px;
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: ${(props) => (props.available ? "pointer" : "arrow")};
  }
`;

const emptySlotImgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IQjPOaJwyRNq9Q6Gljej3LxRfDqV4fsWTiSNEHEiooEuGNRRCQ";

function SlotItem({ product, coin, onPurchase, onCncelOrder, purchasedOrder, isOrderCancelled }) {
  const { productImageUrl, name, price } = product;

  const [totalItems, settotalItems] = useState(0);

  useEffect(() => {
    if (isOrderCancelled) settotalItems(0);
  }, [isOrderCancelled]);

  const removeItem = (prod) => {
    if (totalItems > 0) {
        onCncelOrder(price);
        settotalItems(totalItems - 1);
        purchasedOrder(prod, 'REMOVE_ITEM');
    }
  };

  const addItem = (prod) => {
    if (price > coin) return;
    onPurchase(price);
    settotalItems(totalItems + 1);
    purchasedOrder(prod, 'ADD_ITEM');
  };

  return (
    <DivBox>
      <Img src={productImageUrl || emptySlotImgUrl} />
      <DivName>{name || "Item"}</DivName>
      <DivPrice>{ "Price : " + price || ""}</DivPrice>
      {name !== null && <ButtonContainer>
        <RemoveItem onClick={() => removeItem(product)}>&#8722;</RemoveItem>
        <TotalItems>{totalItems}</TotalItems>
        <AddItem onClick={() => addItem(product)}>&#43;</AddItem>
        <DivStatus available={name && coin >= price} />
      </ButtonContainer>}
    </DivBox>
  );
}
export default SlotItem;
