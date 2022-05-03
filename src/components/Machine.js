import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SlotItem from "./SlotItem";
import { products } from "../data/data";
import { loadData } from "../actions";

const Container = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
function Machine(props) {
  const { coin, onPurchase, onCncelOrder, purchasedOrder, isOrderCancelled } = props;
  const [productList] = useState(products);

  useEffect(() => {
    // props.loadData();

    // const { isLoading, data, loadData, error } = props;

    // console.log("data >>>>>>>>>>>> ", data);

  })

  return (
    <Container>
      {productList &&
        productList.map((p) => {
          return (
            <SlotItem
              key={p.id}
              product={p}
              coin={coin}
              onPurchase={onPurchase}
              onCncelOrder={onCncelOrder}
              purchasedOrder={purchasedOrder}
              isOrderCancelled={isOrderCancelled}
            />
          );
        })}
    </Container>
  );
}
// export default Machine;

const mapStateToProps = ({ isLoading, data, error }) => ({
    isLoading,
    data,
    error
});

const mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(loadData()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Machine);
