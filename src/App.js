import React, { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import Machine from "./components/Machine";
import InputCoin from "./components/InputCoin";
import "./App.css";
import PurchasedOrderBill from "./components/PurchasedOrderBill";

import configureStore from "./store";

const store = configureStore();

const Cabinet = styled.div`
  display: flex;
`;
const MainContainer = styled.div`
  text-align: center;
  padding: 25px;
`;
function App() {
  const [coin, setCoin] = useState(0);
  const [isOrderCancelled, setisOrderCancelled] = useState(false);
  const [purchasedItemsList, setPurchasedItemsList] = useState([]);

  const onCoinChanged = (total) => {
    setCoin(total);
    setPurchasedItemsList([]);
  };

  const onCancelOrder = (isCancelled) => {
    setisOrderCancelled(isCancelled);
  }

  const onPurchase = (price) => {
    setCoin(coin - price);
  };

  const onCncelOrder = (price) => {
    setCoin(coin + price);
  };

  const purchasedOrder = (product, tag) => {
    let prodList = purchasedItemsList;
    if (tag === 'ADD_ITEM') {
      if (prodList.length > 0) {
          if (!prodList.includes(product)) {
            prodList.push(product);
          } else {
            prodList.forEach((item) => {
              if (item.id === product.id) {
                item.quantity += 1;
              }
            });
          }
      } else {
          prodList.push(product);
      }
    } else if (tag === 'REMOVE_ITEM') {
        if (prodList.length > 0) {
          prodList.forEach((item) => {
            if (item.id === product.id) {
              if (item.quantity > 1) {
                item.quantity -= 1;
              } else {
                var index = prodList.indexOf(item);
                if (index !== -1) {
                  prodList.splice(index, 1);
                }
              }
            }
          });
        }
    }
    setPurchasedItemsList(prodList);
  }

  return (
    <Provider store={store}>
      <MainContainer>
        <h1>Vending Machine</h1>
        <Cabinet>
          <Machine
            coin={coin}
            onPurchase={onPurchase}
            onCncelOrder={onCncelOrder}
            isOrderCancelled={isOrderCancelled}
            purchasedOrder={purchasedOrder}
          />
          <InputCoin
            coin={coin}
            onCoinChanged={onCoinChanged}
            onCancelOrder={onCancelOrder}
          />
          <PurchasedOrderBill purchasedOrderList={purchasedItemsList} />
        </Cabinet>
      </MainContainer>
    </Provider>
  );
}

export default App;
