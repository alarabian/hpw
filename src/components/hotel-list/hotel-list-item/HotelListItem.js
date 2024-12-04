import React from "react";
import { FaHeart } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/cg";

import img1 from "../../../../public/assets/images/hotel/room-1.PNG";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
const data = [
  {
    id: 1,
    url: img1,
    title: "Gurugram India",
    price: "₹31,000",
    time: "night",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Deluxe Room",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Luxury Room",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Family Room",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 5,
    url: img1,
    title: "Gurugram India",
    price: "₹31,000",
    time: "night",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 6,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Double Room",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 7,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Junior Suit",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 8,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Deluxe Room",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
];
const HotelListItem = () => {
  return (
    <>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-lg-6 col-md-6" key={item.id}>
              <div className="viewBox listItem">
                <div className="viewPicture">
                  <Link href="/hotel-detail">
                    <Image
                      src={"/assets/images/hotel/room-1.PNG"}
                      alt="Image"
                      width={600}
                      height={200}
                      className="img-fluid"
                    />
                    <div className="wish">
                      <FaHeart />
                    </div>
                  </Link>
                </div>
                <div className="bookPart">
                  <div className="text">
                    <h5>{item.title}</h5>
                    {/* <p>{item.desc}</p> */}
                    <span>
                      <strong>{item.price}</strong> {item.time}
                    </span>
                  </div>
                  <div className="bookHotel">
                    <Link href="/hotel-detail" className="showAll">Book Now</Link>
                    <div className="socialIcon">
                      <Link href="/">
                        <FaFacebook />
                      </Link>
                      <Link href="/">
                        <FaSquareTwitter />
                      </Link>
                      <Link href="/">
                        <FaInstagramSquare />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-lg-12">
          <div className="loadMore">
            <button className="loadMoreButton">
              Load More <CgMoreVerticalO />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelListItem;
