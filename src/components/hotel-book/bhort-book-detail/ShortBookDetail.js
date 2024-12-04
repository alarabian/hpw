import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShortBookDetail = () => {
  return (
    <>
      <div className="shortBookDetail">
        <div className="aboutBook">
          <div className="pic">
            <Image
              src="/assets/images/hotel/1.webp"
              alt="Hotel"
              width={400}
              height={400}
              className="img-fluid"
            />
          </div>
          <div className="text">
            <h5>Ananda Bagh - 4BHK Farm Retreat with Pool</h5>
            <p>Farm stay</p>
            <span>4.96 (23 reviews) • Superhost</span>
          </div>
        </div>
        <div className="priceDetail">
          <h4>Price details</h4>
          <ul>
            <li>
              <span>₹14,672 x 5 nights</span>
              <span>₹73,360</span>
            </li>
            <li>
              <span>
                <Link href={"/"}>Cleaning fee</Link>
              </span>
              <span>₹1,000</span>
            </li>
            <li>
              <span>
                <Link href={"/"}>Taxes</Link>
              </span>
              <span>₹13,384.8</span>
            </li>
          </ul>
        </div>
        <div className="totalPrice">
          <span>Total (INR)</span>
          <p>₹87,744.8</p>
        </div>
      </div>
    </>
  );
};

export default ShortBookDetail;
