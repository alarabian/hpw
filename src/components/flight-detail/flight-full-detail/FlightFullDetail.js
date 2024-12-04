import Image from "next/image";
import React from "react";
import { BsFillBox2Fill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal, MdArrowRightAlt } from "react-icons/md";
import { TbWheel } from "react-icons/tb";
import { LuPlug2 } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { BiBath } from "react-icons/bi";
import { IoWifi } from "react-icons/io5";


const FlightFullDetail = () => {
  return (
    <>
      <div className="flightFullDetail">
        <div className="header">
          <div className="ourTrip">
            <h4>
              <span>New Delhi</span>
              <MdArrowRightAlt />
              <span>Mumbai</span>
            </h4>
            <ul>
              <li>Thu, 14 Nov</li>
              <li> • Non-stop</li>
              <li> • 2h 10m</li>
              <li> • Economy</li>
            </ul>
          </div>
          <div className="name">
            <Image src="/assets/images/SG.PNG" width={40} height={40} alt="Flight" />
            <h6>SpiceJet | SG 8169</h6>
          </div>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-lg-8">
              <div className="fullCircle flightDuration">
                <div className="duration">
                  <div className="time">
                    <h5>21:30</h5>
                    <p>Fri, 12 Jan, DEL - Delhi</p>
                    <span>Indira Gandhi Intl Airport</span>
                    <strong>Terminal 3</strong>
                  </div>
                  <div className="distance">
                    <span>4hr 5 min</span>
                    <hr />
                    <span>non stop</span>
                  </div>
                  <div className="time">
                    <h5>21:30</h5>
                    <p>Fri, 12 Jan,BOM - Mumbai</p>
                    <span>Chatrapati Shivaji International Airport</span>
                    <strong>Terminal 1</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="baggage">
                <ul>
                  <li>
                    <strong>Baggage</strong> Per Traveller
                  </li>
                  <li>
                    <strong>Cabin</strong> 7 Kg (1 piece per pax)
                  </li>
                  <li>
                    <strong>Check-in</strong> 15 Kg (1 piece per pax)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="seat">
            <ul>
              <li><TbWheel /> B737-800</li>
              <li><MdAirlineSeatReclineNormal /> Standard</li>
              <li><BsFillBox2Fill /> Narrow (Limited seat tilt)</li>
            </ul>
          </div>
          <div className="features">
            <ul>
              <li><IoWifi /></li>
              <li><BiBath /></li>
              <li><FaYoutube /></li>
              <li><LuPlug2 /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightFullDetail;
