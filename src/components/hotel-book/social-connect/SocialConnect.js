import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const SocialConnect = () => {
  return (
    <>
      <div className="socialConnect">
        <ul>
          <li>
            <Link href={"/"}>
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <FcGoogle />{" "}
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <FaApple />
            </Link>
          </li>
        </ul>
        <div className="email">
          <Link href={"/"}>
            <MdOutlineMailOutline />
            Continue with email
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialConnect;
