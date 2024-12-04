"use client";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  const [userShow, setUserShow] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="headerCard">
            <div className="logo">
              <Link href="/">
                {/* <Image
                  src="/assets/images/logo.png"
                  alt="HPW"
                  width={260}
                  height={41}
                  className="img-fluid"
                /> */}
                <p>
                  Holiday Planet World <span> Tour & Travels</span>
                </p>
              </Link>
            </div>
            <div className="bar">
              <ul>
                <li className="barCard">
                  <Link href="#">hpw your home</Link>
                </li>
                <li className="barCard">
                  <Link href="#">
                    <TbWorld />
                  </Link>
                </li>
                
              </ul>
              <div className="userInfo">
                  <div className="btn" onClick={() => setUserShow(!userShow)}>
                    <FaUserCircle />
                    <FaBarsStaggered />
                  </div>
                  {userShow && (
                    <div className="userList">
                      <ul>
                        <li>
                          <Link href="#">Sign up</Link>
                        </li>
                        <li>
                          <Link href="#">Log in</Link>
                        </li>
                        <li>
                          <Link href="#">HPW your home</Link>
                        </li>
                        <li>
                          <Link href="#">Host an experience</Link>
                        </li>
                        <li>
                          <Link href="#">Help Centre</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
