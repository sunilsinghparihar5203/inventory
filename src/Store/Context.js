import React from "react";

export const CartItemsContext = React.createContext({
  Items: [],
  addItems: (item) => {},
  removeItem: () => {},
  handleShow:()=>{},
  handleClose:()=>{},
});

export const MadicinesContext = React.createContext({
  medicines: [],
  addMedicines: (item) => {},
  getDataHandler:()=>{}
});
