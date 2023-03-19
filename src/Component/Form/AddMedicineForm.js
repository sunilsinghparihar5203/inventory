import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import { MadicinesContext } from "../../Store/Context";

function AddMedicineForm() {
  const [input, setInput] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const medCtx = useContext(MadicinesContext);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    if(input.Qty < 0 ){
      alert("Qty is not valid.")
      return
    }
    if(input.Price < 0 ){
      alert("price is not valid.")
      return
    }
    medCtx.addMedicines(input);
    alert("added");
    setInput({})
  };

  return (
    <div className="container my-2 p-2 shadow p-3 mb-5 bg-body rounded">
      <form onSubmit={FormSubmitHandler} id="addMedicineForm">
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Medicine
            </label>
            <input
              type="text"
              className="form-control"
              name="Medicine"
              value={input.Medicine || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="Description"
              value={input.Description || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              name="Price"
              value={input.Price || 0}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="Qty" className="form-label">
              Qty
            </label>
            <input
              type="number"
              className="form-control"
              name="Qty"
              value={input.Qty || 1}
              min='1'
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12 mt-2">
            {!isLoading && <Button btnType={"btn-info"} text="Add" />}
            {isLoading && <p>Saving......</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddMedicineForm;
