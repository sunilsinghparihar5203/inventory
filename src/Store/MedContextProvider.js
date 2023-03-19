import React, { useState, useEffect, useCallback } from "react";
import { CartItemsContext, MadicinesContext } from "./Context";
import axios from "axios";

function MedContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [allMadicine, setAllMadicine] = useState([]);
  const [show, setShow] = useState(false);
  const [totolAmount, settotolAmount] = useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addMedicinesHandler = (medicine) => {
    console.log("add medicine api");
    axios
      .post(
        `https://crudcrud.com/api/d8e2614a03ea4665ba6f8b05fa13765b/AllMedicine`,
        medicine
      )
      .then((res) => {
        console.log(res.data);
        getDataHandler();
        console.log("Added");
      })
      .catch((err) => console.log({ err: err }));
  };

  const getDataHandler = useCallback(() => {
    console.log("get api trigger");
    axios
      .get(
        `https://crudcrud.com/api/d8e2614a03ea4665ba6f8b05fa13765b/AllMedicine`
      )
      .then((res) => {
        setAllMadicine(res.data);
        console.log({ allmedicine: res.data });
      })
      .catch((err) => console.log({ err: err }));
  }, []);

  const medicineValues = {
    medicines: allMadicine,
    addMedicines: addMedicinesHandler,
    getDataHandler: getDataHandler,
  };

  const updateMadicineHandler = (id) => {
    console.log("update")
  };

  const addCartItemsHandler = (item) => {
    console.log("adding to cart")
    setCartItems((value) => [...value, item]);
    settotolAmount((value) => parseInt(value)+ parseInt(item.Price ))
   };


  const removeCartItemsHandler = (id) => {
    console.log("Cart item removed");
    let updatedCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCartItems);
  };

  const cartValues = {
    Items: cartItems,
    addItems: addCartItemsHandler,
    removeItem: removeCartItemsHandler,
    handleShow: handleShow,
    handleClose: handleClose,
    show: show,
    totalAmount :totolAmount
  };

  return (
    <CartItemsContext.Provider value={cartValues}>
      <MadicinesContext.Provider value={medicineValues}>
        {props.children}
      </MadicinesContext.Provider>
    </CartItemsContext.Provider>
  );
}

export default MedContextProvider;
