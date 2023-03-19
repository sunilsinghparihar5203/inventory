import React from "react";
import AddMedicineForm from "./Component/Form/AddMedicineForm";
import Heading from "./Component/UI/Heading";
import ListMedicine from "./Component/List/ListMedicine";
import MedContextProvider from "./Store/MedContextProvider";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <MedContextProvider>
      <Heading />
      <AddMedicineForm />
      <ListMedicine />
      <Cart />
    </MedContextProvider>
  );
}

export default App;
