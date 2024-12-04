import React from "react";
import { FaHeart } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/cg";

import img1 from "../../../../public/assets/images/book/package_img_1.JPG";
import Link from "next/link";
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
    title: "Gurugram India",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Gurugram India",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Gurugram India",
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
    title: "Gurugram India",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 7,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Gurugram India",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 8,
    url: img1,
    price: "₹31,000",
    time: "night",
    title: "Gurugram India",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
];

const HotelBook = () => {
  return (
    <>
      <section className="hotelBook sectionSpace bgGray">
        <div className="container-fluid">
          <div className="setionTitle">
            <h3>Hotel Book</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium esse quisquam atque soluta, incidunt harum vel
            </p>
          </div>

          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6" key={item.id}>
                  <div className="viewBox">
                    <div className="viewPicture">
                      <Link href="/hotel-list">
                      <Image
                        src={"/assets/images/book/packk.webp"}
                        width={300}
                        height={360}
                        alt="Image"
                        className="img-fluid"
                      />
                      <div className="wish">
                        <FaHeart />
                      </div>
                      </Link>
                    </div>

                    <h5>{item.title}</h5>
                    {/* <p>{item.desc}</p> */}
                    <span>
                      <strong>{item.price}</strong> {item.time}
                    </span>
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
        </div>
      </section>
    </>
  );
};

export default HotelBook;
