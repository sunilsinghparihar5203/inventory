import React, { useContext, useMemo } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartItemsContext } from "../../Store/Context";

function Cart() {
  const cartCtx = useContext(CartItemsContext);

  console.log({ cartCtx11: cartCtx });
  const RemoveHandler = () => {
    cartCtx.removeItem();
  };

  const purchageHandler = () => {
    alert("done");
  };

  const hideHandler = () => {
    cartCtx.handleClose();
  };
  
  return (
    <>
      <Offcanvas
        show={cartCtx.show}
        onHide={hideHandler}
        placement="end"
        name={"end"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table className="table">
            <tr key={"th"}>
              <th>Medicine</th>
              <th>Price</th>
              <th>Qty</th>
              <th></th>
            </tr>
            {cartCtx.Items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Medicine}</td>
                  <td>{parseInt(item.Price).toFixed(2)}</td>
                  <td>{item.Qty}</td>
                  <td>
                    {/* <button className="btn btn-info">remove</button> */}
                  </td>
                </tr>
              );
            })}
            <tr key={"th"}>
              <th></th>
              <th>Total</th>
              <th>{cartCtx.totalAmount.toFixed(2)}</th>
              <th></th>
            </tr>
          </table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
