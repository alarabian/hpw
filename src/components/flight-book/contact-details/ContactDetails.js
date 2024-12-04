import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="travelerDetails contactDetails">
        <div className="header">
          <div className="name">
            <h4>Contact Details</h4>
            <p>Your ticket & flight information will be sent here</p>
          </div>
        </div>

        <form className="AdultForm row">
          <div className="form-group col-lg-4">
            <select className="form-select">
              <option value="title">Title </option>
              <option value="mr">Mr. </option>
              <option value="ms">Ms. </option>
              <option value="mrs">Mrs. </option>
            </select>
          </div>
          <div className="form-group col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="First & Middle Name"
            />
          </div>
          <div className="form-group col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>

          <div className="form-group col-lg-4">
            <select className="form-select">
              <option value="ind">India </option>
              <option value="pak">Pakistan </option>
              <option value="usa">USA. </option>
            </select>
          </div>
        </form>

        <div className="header1">
          <div className="name">
            <h4>GST Details</h4>
            <p>
              To claim credit for the GST charged by airlines, please enter your
              GST details
            </p>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              I would like to add my GST Number
            </label>
          </div>
          <div className="name mt-5">
            <h4>Billing Address</h4>
            <p>
              As per the latest govt. regulations, it’s mandatory to provide
              your address.
            </p>
          </div>
        </div>

        <form className="AdultForm row">
          
          <div className="form-group col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Pin code"
            />
          </div>
          <div className="form-group col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
            />
          </div>
          <div className="form-group col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="form-group col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="State"
            />
          </div>
          
        </form>
      </div>
    </>
  );
};

export default ContactDetails;
