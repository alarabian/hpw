import Image from "next/image";
import Link from "next/link";
import React from "react";

const Insurance = () => {
  return (
    <>
      <div className="insurance boxCard">
        <h5>Travel Insurance</h5>
        <p>Secure your Trip with Travel Insurance for just ₹ 10 per person</p>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <Image
              src="/assets/images/bus/ic_insurance_acko.webp"
              alt="ACKO"
              width={100}
              height={30}
            />
          </label>
        </div>

        <Link className="loadMoreButton d-inline-block mt-3" href={"/"}>
          Know More
        </Link>
      </div>
    </>
  );
};

export default Insurance;
