import Image from "next/image";
import React from "react";
import { LuPlug2 } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { BiBath, BiBus } from "react-icons/bi";
import { IoBus, IoWifi } from "react-icons/io5";
import { CgEditBlackPoint } from "react-icons/cg";

import { RiFolderVideoFill } from "react-icons/ri";
import { FaBowlFood, FaPlug, FaWifi } from "react-icons/fa6";
import { PiSeat } from "react-icons/pi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { LuBus } from "react-icons/lu";
import Link from "next/link";

const BusListItem = () => {
  return (
    <>
      <div className="busListItem flightItem bus">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-12">
            <div className="flightDuration">
              <div className="brand">
                <Image
                  src="/assets/images/bus/assured.jpg"
                  width={115}
                  height={36}
                  alt="assured"
                />
                <h3 className="mb-0">Yolo Bus</h3>
                <p>Bharat Benz AC Sleeper (2 + 1)</p>
              </div>
              <div className="duration">
                <div className="time">
                  <p>20:46</p>
                  <h5>16 Nov</h5>
                  <p>Hyderabad</p>
                </div>
                <div className="distance">
                  <span>12:10 Hrs</span>
                  <hr />
                </div>
                <div className="time">
                  <p>17 Nov</p>
                  <h5>08:56</h5>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
            <div className="flightFullDetail">
              <div className="footer">
                <div className="seat">
                  <ul>
                    <li>
                      <CgEditBlackPoint />
                      Live Tracking
                    </li>
                  </ul>
                </div>
                <div className="features before">
                  <ul>
                    <li>
                      <IoWifi />
                    </li>
                    <li>
                    <FaBowlFood />
                    </li>
                    <li>
                      <FaYoutube />
                    </li>
                    <li>
                      <LuPlug2 />
                    </li>
                  </ul>
                </div>
                <div className="seat">
                  <ul>
                    <li>Boarding & Droping Points</li>
                    <li>Amenities</li>
                    <li>Cancellation Policy</li>
                    <li>Travel Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="flightPrice">
              <span>Starting at</span>
              <p>₹8,64</p>
              <div className="bookArea">
                <a className="btn" href="#">
                  Show seats
                </a>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flightTab">
          <div className="tab-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="tabTitle">
                  <h5>8 Seats Available</h5>
                  <p>Click on seat to select / deselect</p>
                </div>
                <div className="busSeatInfo">
                  <h5>Upper</h5>
                  <div className="busSeatCard ">
                    <span className="mainSeat">
                      <MdOutlineAirlineSeatReclineNormal />
                    </span>
                    <div className="seats">
                      <div className="main">
                        <ul className="smallSeat">
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <IoBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="side">
                        <ul>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h5>Lower</h5>
                  <div className="busSeatCard">
                    <span className="mainSeat">
                      <MdOutlineAirlineSeatReclineNormal />
                    </span>
                    <div className="seats">
                      <div className="main">
                        <ul className="smallSeat">
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>

                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="side">
                        <ul>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                          <li>
                            <Link href="bus-ticket-invoice">
                              <BiBus />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="seatColorMeans">
                    <ul>
                      <li>
                        <span className="text-success">
                          <IoBus />
                        </span>
                        Selected Seat
                      </li>
                      <li>
                        <span>
                          <IoBus />
                        </span>
                        Available Seat
                      </li>
                      <li>
                        <span className="text-danger">
                          <IoBus />
                        </span>
                        Booked By Ladies
                      </li>
                      <li>
                        <span className="text-danger">
                          <IoBus />
                        </span>
                        Reserved By Ladies
                      </li>
                      <li>
                        <span>
                          <IoBus />
                        </span>
                        Occupied Seat
                      </li>
                      <li>
                        <span>
                          <IoBus />
                        </span>
                        Blocked Seat
                      </li>
                    </ul>
                  </div>  
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tabTitle">
                  <h5>Boarding & Droping Point</h5>
                  <p>Click on selected Boarding and dropping Point</p>
                </div>

                <div className="boardingInfo">
                  <div className="boardingCard">
                    <h5>Boarding Point</h5>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Laxmi Mandir Tiraya Tank</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                  </div>
                  <div className="boardingCard">
                    <h5>Dropping Point</h5>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Laxmi Mandir Tiraya Tank</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="continueBusBook">
                  <Link href="/bus-book" className="loadMoreButton justify-content-center">Continue</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ONLY FOR UI */}
      <div className="busListItem flightItem bus">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-12">
            <div className="flightDuration">
              <div className="brand">
                <Image
                  src="/assets/images/bus/assured.jpg"
                  width={115}
                  height={36}
                  alt="assured"
                />
                <h3 className="mb-0">Yolo Bus</h3>
                <p>Bharat Benz AC Sleeper (2 + 1)</p>
              </div>
              <div className="duration">
                <div className="time">
                  <p>20:46</p>
                  <h5>16 Nov</h5>
                  <p>Hyderabad</p>
                </div>
                <div className="distance">
                  <span>12:10 Hrs</span>
                  <hr />
                </div>
                <div className="time">
                  <p>17 Nov</p>
                  <h5>08:56</h5>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
            <div className="flightFullDetail">
              <div className="footer">
                <div className="seat">
                  <ul>
                    <li>
                      <CgEditBlackPoint />
                      Live Tracking
                    </li>
                  </ul>
                </div>
                <div className="features before">
                  <ul>
                    <li>
                      <IoWifi />
                    </li>
                    <li>
                    <FaBowlFood />
                    </li>
                    <li>
                      <FaYoutube />
                    </li>
                    <li>
                      <LuPlug2 />
                    </li>
                  </ul>
                </div>
                <div className="seat">
                  <ul>
                    <li>Boarding & Droping Points</li>
                    <li>Amenities</li>
                    <li>Cancellation Policy</li>
                    <li>Travel Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="flightPrice">
              <span>Starting at</span>
              <p>₹8,64</p>
              <div className="bookArea">
                <a className="btn" href="#">
                  Show seats
                </a>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="busListItem flightItem bus">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-12">
            <div className="flightDuration">
              <div className="brand">
                <Image
                  src="/assets/images/bus/assured.jpg"
                  width={115}
                  height={36}
                  alt="assured"
                />
                <h3 className="mb-0">Yolo Bus</h3>
                <p>Bharat Benz AC Sleeper (2 + 1)</p>
              </div>
              <div className="duration">
                <div className="time">
                  <p>20:46</p>
                  <h5>16 Nov</h5>
                  <p>Hyderabad</p>
                </div>
                <div className="distance">
                  <span>12:10 Hrs</span>
                  <hr />
                </div>
                <div className="time">
                  <p>17 Nov</p>
                  <h5>08:56</h5>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
            <div className="flightFullDetail">
              <div className="footer">
                <div className="seat">
                  <ul>
                    <li>
                      <CgEditBlackPoint />
                      Live Tracking
                    </li>
                  </ul>
                </div>
                <div className="features before">
                  <ul>
                    <li>
                      <IoWifi />
                    </li>
                    <li>
                    <FaBowlFood />
                    </li>
                    <li>
                      <FaYoutube />
                    </li>
                    <li>
                      <LuPlug2 />
                    </li>
                  </ul>
                </div>
                <div className="seat">
                  <ul>
                    <li>Boarding & Droping Points</li>
                    <li>Amenities</li>
                    <li>Cancellation Policy</li>
                    <li>Travel Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="flightPrice">
              <span>Starting at</span>
              <p>₹8,64</p>
              <div className="bookArea">
                <a className="btn" href="#">
                  Show seats
                </a>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="busListItem flightItem bus">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-12">
            <div className="flightDuration">
              <div className="brand">
                <Image
                  src="/assets/images/bus/assured.jpg"
                  width={115}
                  height={36}
                  alt="assured"
                />
                <h3 className="mb-0">Yolo Bus</h3>
                <p>Bharat Benz AC Sleeper (2 + 1)</p>
              </div>
              <div className="duration">
                <div className="time">
                  <p>20:46</p>
                  <h5>16 Nov</h5>
                  <p>Hyderabad</p>
                </div>
                <div className="distance">
                  <span>12:10 Hrs</span>
                  <hr />
                </div>
                <div className="time">
                  <p>17 Nov</p>
                  <h5>08:56</h5>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
            <div className="flightFullDetail">
              <div className="footer">
                <div className="seat">
                  <ul>
                    <li>
                      <CgEditBlackPoint />
                      Live Tracking
                    </li>
                  </ul>
                </div>
                <div className="features before">
                  <ul>
                    <li>
                      <IoWifi />
                    </li>
                    <li>
                    <FaBowlFood />
                    </li>
                    <li>
                      <FaYoutube />
                    </li>
                    <li>
                      <LuPlug2 />
                    </li>
                  </ul>
                </div>
                <div className="seat">
                  <ul>
                    <li>Boarding & Droping Points</li>
                    <li>Amenities</li>
                    <li>Cancellation Policy</li>
                    <li>Travel Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="flightPrice">
              <span>Starting at</span>
              <p>₹8,64</p>
              <div className="bookArea">
                <a className="btn" href="#">
                  Show seats
                </a>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="busListItem flightItem bus">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-12">
            <div className="flightDuration">
              <div className="brand">
                <Image
                  src="/assets/images/bus/assured.jpg"
                  width={115}
                  height={36}
                  alt="assured"
                />
                <h3 className="mb-0">Yolo Bus</h3>
                <p>Bharat Benz AC Sleeper (2 + 1)</p>
              </div>
              <div className="duration">
                <div className="time">
                  <p>20:46</p>
                  <h5>16 Nov</h5>
                  <p>Hyderabad</p>
                </div>
                <div className="distance">
                  <span>12:10 Hrs</span>
                  <hr />
                </div>
                <div className="time">
                  <p>17 Nov</p>
                  <h5>08:56</h5>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
            <div className="flightFullDetail">
              <div className="footer">
                <div className="seat">
                  <ul>
                    <li>
                      <CgEditBlackPoint />
                      Live Tracking
                    </li>
                  </ul>
                </div>
                <div className="features before">
                  <ul>
                    <li>
                      <IoWifi />
                    </li>
                    <li>
                    <FaBowlFood />
                    </li>
                    <li>
                      <FaYoutube />
                    </li>
                    <li>
                      <LuPlug2 />
                    </li>
                  </ul>
                </div>
                <div className="seat">
                  <ul>
                    <li>Boarding & Droping Points</li>
                    <li>Amenities</li>
                    <li>Cancellation Policy</li>
                    <li>Travel Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="flightPrice">
              <span>Starting at</span>
              <p>₹8,64</p>
              <div className="bookArea">
                <a className="btn" href="#">
                  Show seats
                </a>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusListItem;
