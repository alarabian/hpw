import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FeatureSlider = () => {
  return (
    <>
      <div className="featureSlider bedroomSlider border-0">
        <div className="sliderTitle">
          <h4>Accessibility features</h4>
          {/* <p>This info was provided by the Host and reviewed by hpw.</p> */}
          <div className="arrow">
            <p>1/3</p>
            <div className="btns">
              <button>
                <IoIosArrowBack />{" "}
              </button>
              <button>
                <IoIosArrowForward />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="slideCard">
          <div className="slideItem">
            <Image
              src="/assets/images/hotel/fes1.webp"
              alt="Hotel"
              width={400}
              height={400}
              className="img-fluid"
            />
            <h5>Guest entrance and parking</h5>
            <p> Accessible parking spot</p>
          </div>
          <div className="slideItem">
            <Image
              src="/assets/images/hotel/fes2.webp"
              alt="Hotel"
              
              width={400}
              height={400}
              className="img-fluid"
            />
            <h5>Guest entrance and parking</h5>
            <p>Lit path to the guest entrance</p>
          </div>
        </div>
        <button className="showAll">Show all 2 Features</button>
      </div>
    </>
  );
};

export default FeatureSlider;
