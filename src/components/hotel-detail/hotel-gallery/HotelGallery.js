import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";

const HotelGallery = () => {
  return (
    <>
      <div className="hotelGalleryCard">
        <div className="shareHeader">
          <h3>Ananda Bagh - 4BHK Farm Retreat with Pool</h3>
          <div className="share">
            <ul>
              <li>
                <MdOutlineIosShare />
                <span>Share</span>
              </li>
              <li>
                <FaRegHeart />
                <span>Save</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hotelFigure">
          <div className="row">
            <div className="col-lg-6">
              <div className="hotelPic">
                <Image
                  src={"/assets/images/hotel/1.webp"}
                  alt="Hotel"
                  width={800}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hotelMultiPic">
                <Image
                  src={"/assets/images/hotel/2.webp"}
                  alt="Hotel"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
                <Image
                  src={"/assets/images/hotel/3.webp"}
                  alt="Hotel"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
                <Image
                  src={"/assets/images/hotel/4.webp"}
                  alt="Hotel"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
                <Image
                  src={"/assets/images/hotel/5.webp"}
                  alt="Hotel"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
                <button className="showAll">show all photos</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelGallery;
