import React from "react";
import { FaFan } from "react-icons/fa";
import {
  MdAirlineSeatFlat,
  MdAirlineSeatReclineNormal,
  MdWbSunny,
} from "react-icons/md";
import { FiSunrise } from "react-icons/fi";
import { IoMoon, IoPartlySunnyOutline } from "react-icons/io5";

const BusFilter = () => {
  return (
    <>
      <div className="busFilter pageFilter">
        <div className="title">
          <h3>Bus Filter</h3>
        </div>
        <div className="pageFilterItem hotelItem  bus">
          <h5>Bus Type</h5>
          <ul>
            <li>
              {" "}
              <FaFan />
              AC
            </li>
            <li>
              <FaFan />
              Non AC
            </li>
            <li>
              <MdAirlineSeatReclineNormal />
              Seater
            </li>
            <li>
              <MdAirlineSeatFlat />
              Sleeper
            </li>
          </ul>
        </div>
        <div className="pageFilterItem hotelItem  onePrice">
          <h5>Price Range</h5>
          <input type="range" className="form-range" id="customRange1" />
        </div>

        <div className="pageFilterItem hotelItem  bus">
          <h5>Departure Time</h5>
          <ul>
            <li>
              {" "}
              <FiSunrise />
              Before 10 AM
            </li>
            <li>
              <MdWbSunny />
              10 AM - 5 PM
            </li>
            <li>
              <IoPartlySunnyOutline />5 PM - 11 PM
            </li>
            <li>
              <IoMoon />
              After 11 PM
            </li>
          </ul>
        </div>

        <div className="pageFilterItem airlines hotelItem property">
          <h5>Bus Partner</h5>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Aditya Logistics
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                ANMOL TOURS & TRAVELS
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                AVM Travels
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Balaji Cabs
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Bharathi Travels
              </label>
            </div>
          </div>
        </div>
        <div className="pageFilterItem airlines hotelItem property">
          <h5>Boarding Point</h5>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Afzal Gunj
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Allwyn X Road
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Alwal
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Ameerpet
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Anandbagh
              </label>
            </div>
          </div>
        </div>
        <div className="pageFilterItem airlines hotelItem property">
          <h5>Dropping Point</h5>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                (MEJASTIC) Anand Rao Circle
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Agara
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Agara Nandas Hotel
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Airport
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                defaultValue="true"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Airport Toll
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusFilter;
