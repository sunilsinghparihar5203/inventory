import React, { useContext } from "react";
import { CartItemsContext } from "../../Store/Context";

function Heading() {
  const cartCtx = useContext(CartItemsContext);
  console.log({heading:cartCtx})

  const showhandler = () =>{
    cartCtx.handleShow()
  }
  return (
    <div className="text-center bg-dark text-white py-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 text-center">
            <h1>+ Medicine Inventory Management + </h1>
          </div>
          <div className="col-sm-2 text-center my-auto">
            <button className="btn btn-info" onClick={showhandler}>
              Cart {cartCtx.Items.length}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
