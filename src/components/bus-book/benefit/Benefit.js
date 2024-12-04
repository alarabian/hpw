import Image from "next/image";
import Link from "next/link";
import React from "react";

const Benefit = () => {
  return (
    <>
      <div className="benefit boxCard">
        <Image
          alt="assured"
          width={115}
          height={36}
          src="/assets/images/bus/assured.jpg"
        />
        <h4>Get Assured Benefit in Rs.299.00 </h4>
        <ul>
          <li>
            <span>Bus cancelled?</span>
            150% Refund
          </li>
          <li>
            <span>Bad quality service?</span>
            Upto 100% refund
          </li>
          <li>
            <span>Bus delayed?</span>
            Upto 100% refund
          </li>
          <li>
            <span>Changed your plans?</span>
            100% refund
          </li>
        </ul>
        <Link className="loadMoreButton d-inline-block" href={"/"}>Know More</Link>
      </div>
    </>
  );
};

export default Benefit;
