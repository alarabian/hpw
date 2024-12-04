import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BedroomSlider = () => {
  return (
    <>
      <div className="bedroomSlider">
        <div className="sliderTitle">
          <h4>Where you will sleep</h4>
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
              src="/assets/images/hotel/bed1.webp"
              alt="Hotel"
              width={400}
              height={400}
              className="img-fluid"
            />
            <h5>Bedroom 1</h5>
            <p>1 king bed, 1 single bed, 3 floor mattresses</p>
          </div>
          <div className="slideItem">
            <Image
              src="/assets/images/hotel/bed2.webp"
              alt="Hotel"
              
              width={400}
              height={400}
              className="img-fluid"
            />
            <h5>Bedroom 2</h5>
            <p>1 king bed, 2 floor mattresses</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BedroomSlider;
