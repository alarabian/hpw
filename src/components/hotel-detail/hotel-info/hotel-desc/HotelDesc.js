import Image from "next/image";
import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaIoxhost, FaRegCheckCircle } from "react-icons/fa";

const HotelDesc = () => {
  return (
    <>
      <div className="hotelDesc">
        <div className="header">
          <h3>Farm stay in Gurugram, India </h3>
          <ul>
            <li>16+ guests</li>
            <li>4 bedrooms</li>
            <li>7 beds</li>
            <li>4.5 bathrooms</li>
          </ul>
        </div>
        <div className="body">
          <div className="bodyCard">
            <div className="guest">
              <h5>Guest favourite</h5>
            </div>
            <p>One of the most loved homes on hpw, according to guests</p>
            <div className="rating">
              <h6>4.96</h6>
              ICON
            </div>
          </div>
          <div className="review">
            <h5>23</h5>
            <span>Review</span>
          </div>
        </div>
        <div className="footer">
          <div className="pic">
            <Image
              src={"/assets/images/hotel/host.webp"}
              alt="Hotel"
              className="img-fluid"
              
              width={400}
              height={400}
            />
          </div>
          <div className="text">
            <h5>Hosted by Ayush</h5>
            <p>Superhost, 8 years hosting</p>
          </div>
        </div>

        <div className="dedicatedPart">
          <ul>
            <li>
              <div className="icon">
                <BsPersonWorkspace />
              </div>
              <div className="text">
                <h6>Dedicated workspace</h6>
                <p>A common area with wifi that well suited for working.</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <FaRegCheckCircle />
              </div>
              <div className="text">
                <h6>Self check-in</h6>
                <p>You can check in with the building staff.</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <FaIoxhost />
              </div>
              <div className="text">
                <h6>Ayush is a Superhost</h6>
                <p>Superhosts are experienced, highly rated Hosts.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="showMore">
          <p>
            The Ananda Bagh Farm is a romantic spot in nature in Gurugram. With
            all possible comforts of enjoying the nature. Amenities included is
            an amazing party area with friends and loved ones can enjoy all the
            games like cricket, badminton, football, etc. set in 2.5 acres of
            lush green lawns. We have In-house staff to take care of all your
            needs. We also provide Meals, Bonfire, etc. at extra charges..
          </p>
          <button className="loadMoreButton">Show More</button>
        </div>
      </div>
    </>
  );
};

export default HotelDesc;
