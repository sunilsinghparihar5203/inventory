import React, { useContext,useState } from "react";
import { CartItemsContext } from "../../Store/Context";

function Medicine({id,Medicine,Description,Price,Qty}) {
  const cartCtx = useContext(CartItemsContext);
  const [QtyCount, setqtyCounter] = useState(Qty)

  const addItemsToCartHandler = () => {
    cartCtx.addItems({
      id: id,
      Medicine: Medicine,
      Description: Description,
      Price: Price,
      Qty: 1,
    });
    setqtyCounter(QtyCount - 1)
  };
  return (
    <tr key={id}>
      <td>{Medicine}</td>
      <td>{Description}</td>
      <td>{parseInt(Price).toFixed(2)}</td>
      <td>{QtyCount}</td>
      <td>
        {/* <Button text="Add to cart" btnType="btn-info"  /> */}
        <button className="btn btn-info" onClick={addItemsToCartHandler}>
          Add to cart
        </button>
      </td>
    </tr>
  );
}

export default Medicine;
