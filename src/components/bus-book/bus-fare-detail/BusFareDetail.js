import React from "react";

const BusFareDetail = () => {
  return (
    <>
      <div className="busFareDetail boxCard border-0">
        <h4>Fare Details</h4>
        <div className="breakFare">
          <ul>
            <li>
              <span>Total Fare (inclusive)</span>
              <span>₹ 3129.00</span>
            </li>

            <li>
              <span>Base Fare</span>
              <span>+ ₹2980.00</span>
            </li>
            <li>
              <span>Bus Partner GST</span>
              <span>+ ₹149.00</span>
            </li>
            <li>
              <span>Assured Charge</span>
              <span>₹299.00</span>
            </li>
          </ul>
         
        </div> <div className="bePaid">
            <h5>Total Amount To Be Paid</h5>
            <p>₹ 3428.00</p>
          </div>
      </div>
    </>
  );
};

export default BusFareDetail;
