import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCleaningServices, MdKey, MdMyLocation } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RxValue } from "react-icons/rx";

const GuestFavorite = () => {
  return (
    <>
      <div className="guestFavorite">
        <div className="title">
          <span>4.96</span>
          <h4>Guest favourite </h4>
          <p>
            One of the most loved homes on hpw based on ratings, reviews and
            reliability
          </p>
        </div>
        <div className="guestList">
          <ul>
            <li>
              <span>Cleanliness</span>
              <h6>5.0</h6>
              <MdCleaningServices />
            </li>
            <li>
              <span>Accuracy</span>
              <h6>4.9</h6>
              <FaRegCheckCircle />
            </li>
            <li>
              <span>Check-in</span>
              <h6>5.0</h6>
              <MdKey />
            </li>
            <li>
              <span>Communication</span>
              <h6>5.0</h6>
              <IoChatbubbleOutline />
            </li>
            <li>
              <span>Location</span>
              <h6>5.0</h6>
              <MdMyLocation />
            </li>
            <li>
              <span>Value</span>
              <h6>4.8</h6>
              <RxValue />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GuestFavorite;
