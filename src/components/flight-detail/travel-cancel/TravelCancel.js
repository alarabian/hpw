import Link from "next/link";
import React from "react";
import { MdAssuredWorkload } from "react-icons/md";

const TravelCancel = () => {
  return (
    <>
      <div className="travelCancel">
        <div className="title">
          <h4>Not sure of your travel?</h4>
          <p>Get full flexibility with ixigo add-ons</p>
        </div>
        <div className="cancelItem">
          <div className="assured">
            <div className="header">
              <MdAssuredWorkload />
              <p>Free Cancellation with Assured</p>
              <span>most popular</span>
            </div>
            <div className="body">
              <p>Instant refund of approx. ₹23332</p>
              <Link href="/">Know More</Link>
            </div>
          </div>
          <div className="add">
            <h6>@₹399/traveller</h6>
            <button className="loadMoreButton">ADD</button>
          </div>
        </div>

        <div className="cancelItem">
          <div className="assured">
            <div className="header">
              <MdAssuredWorkload />
              <p>Free Cancellation + Rescheduling with Assured Flex</p>
            </div>
            <div className="body">
              <p>Instant refund of approx. ₹23332</p>
              <p>
                Full Flexibility on rescheduling. Change date, airline & even
                sector for free
              </p>
              <Link href="/">Know More</Link>
            </div>
          </div>
          <div className="add">
            <h6>@₹699/traveller</h6>
            <button className="loadMoreButton">ADD</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelCancel;
