import React from "react";

const FareSummary = () => {
  return (
    <>
      <div className="fareSummary">
        <div className="FareTitle">
          <h5>Fare Summary</h5>
          <span>1 Traveler</span>
        </div>
        <div className="fareList">
          <ul>
            <li>
              <span>Fare Type</span>
              <strong>Partially Refundable</strong>
            </li>

            <li>
              <span>Base Fare</span>
              <span>₹18,050</span>
            </li>
            <li>
              <span>Taxes & Fees</span>
              <span>₹1,485</span>
            </li>
          </ul>
          <div className="totalAmount">
            <h5>Total Amount</h5>
            <p>            ₹19,535</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FareSummary;
