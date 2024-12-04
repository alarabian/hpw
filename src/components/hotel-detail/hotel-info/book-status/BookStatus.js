"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";

const BookStatus = () => {
    return (
    <>
      <div className="bookStatus">
        <div className="actualPrice">
          <h4>
            <span>₹21,461 </span>
            <strong>₹13,255 </strong>
            night
          </h4>
        </div>
        <div className="guestEntry">
          <div className="checkBox">
            <div className="check">
              <span>check-in</span>
              <p>11/17/2024</p>
            </div>
            <div className="check">
              <span>checkout</span>
              <p>11/22/2024</p>
            </div>
          </div>
          <div className="guest">
            <div className="check">
              <span>checkout</span>
              <p>11/22/2024</p>
            </div>
            <div className="icon">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className="rates">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Non-refundable ₹67,276 total
              <p>This reservation is non-refundable.</p>
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
              Refundable ₹74,640 total
              <p>
                Free cancellation before 3:00 pm on 12 Nov. Cancel before
                check-in on 17 Nov for a partial refund.
              </p>
            </label>
          </div>
        </div>

        <div className="reserve">
          <Link className="reserveBtn" href="/book">
            reserve
          </Link>
          <span>You wont be charged yet</span>
        </div>

        <div className="totalPrice">
          <span>Total before taxes</span>
          <p>₹67,276</p>
        </div>
      </div>

      <div className="lowPrice">
        <div className="icon">
          <IoPricetagOutline />
        </div>
        <div className="text">
          <h6>Lower price</h6>
          <p>
            Your dates are ₹8,213 less than the avg. nightly rate of the last 60
            days.
          </p>
        </div>
      </div>
    </>
  );
};

export default BookStatus;
