import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BillingAddress = () => {
  return (
    <>
      <div className="billingAddress boxCard">
        <h5>Billing Address</h5>
        <p>Aramghar,-Aramghar,Near pariwar dhaba ,Hyderabad ,Andhra Pradesh</p>
        <form className="form row">
          <div className="form-group col-lg-6">
            <label htmlFor="address">Address</label>
            <input type="text" placeholder="Address" className="form-control" />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="pin-code">PIN Code</label>
            <input
              type="number"
              placeholder="PIN Code"
              className="form-control"
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="State">State</label>
            <select type="text" className="form-select">
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Gujrat">Gujrat</option>
            </select>
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="city">City</label>
            <input type="text" placeholder="City" className="form-control" />
          </div>
          <div className="form-group col-lg-12">
            <button className="loadMoreButton d-inline-block mt-3">Save</button>
          </div>
        </form>
      </div>
      <div className="continueBtn">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Yes and I accept the Terms and conditions
          </label>
        </div>
        <button className="loadMoreButton d-inline-block mt-3">
          Continue to Pay ₹ 3428 <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </>
  );
};

export default BillingAddress;
