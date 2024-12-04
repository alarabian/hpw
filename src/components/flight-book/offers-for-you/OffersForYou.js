import React from "react";

const OffersForYou = () => {
  return (
    <>
      <div className="offersForYou">
        <form className="havePromo">
          <div className="form-group">
            <input
              type="text"
              placeholder="Have a Promocode? Redeem Here"
              className="form-control"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <strong>IXRBL</strong>
              <span> ₹1,200 Off</span>
              <p>
                Get an Instant Discount of ₹1200 with RBL Bank Credit Cards.
              </p>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <strong>INSTANT</strong>
              <span> ₹505 Off</span>
              <p>
                Coupon applied. You will get an instant discount of ₹505 and a
                complimentary 1-year Lenskart Gold membership.
              </p>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <strong>IXIHDFCCDOM</strong>
              <span> ₹1,000 Off</span>
              <p>Get flat ₹1000 off with HDFC Bank EasyEMI on Credit cards.</p>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default OffersForYou;
