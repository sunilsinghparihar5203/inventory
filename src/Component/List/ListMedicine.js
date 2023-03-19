import React, { useState, useEffect, useContext, useCallback } from "react";
import Medicine from "./Medicine";
import { MadicinesContext } from "../../Store/Context";

function ListMedicine() {
  const [isLoading, setIsLoading] = useState(true);
  const medCtx = useContext(MadicinesContext);

  useEffect(() => {
    medCtx.getDataHandler();
    setIsLoading(false);
    console.log({ medicine: medCtx.medicines });
  }, []);

  return (
    <div className="container shadow p-3 mb-5 bg-body rounded">
      {isLoading && <p>Loading........</p>}
      <table className="table">
        <thead>
          <tr key='th'>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {medCtx.medicines.map((item) => {
            return (
              <>
                {!isLoading && (
                  <Medicine
                    key={item._id}
                    Medicine={item.Medicine}
                    Description={item.Description}
                    Price={item.Price}
                    Qty={item.Qty}
                    id={item._id}
                  />
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListMedicine;
