import React from "react";

const TravelerDetails = () => {
  return (
    <>
      <div className="travelerDetails">
        <div className="header">
          <div className="name">
            <h4>Traveler Details</h4>
            <p>Choose from the saved list or add a new passenger</p>
          </div>
          <p>1 Traveler</p>
        </div>
        <div className="ensure">
          <span>
            Please ensure that your name matches your govt. ID such as Aadhaar,
            Passport or Drivers License
          </span>
          
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
      </div>
    </>
  );
};

export default TravelerDetails;
