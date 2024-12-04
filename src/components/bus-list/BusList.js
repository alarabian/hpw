import React from "react";
import BusFilter from "./bus-filter/BusFilter";
import BusListSec from "./bus-list-sec/BusListSec";
import BusListItem from "./bus-list-sec/bus-list-item/BusListItem";

const BusList = () => {
  return (
    <>
      <section className="busList sectionSpace bgGray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <BusFilter />
            </div>
            <div className="col-lg-9">
              <BusListSec />
              <div className="busListItems">
                <BusListItem />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusList;
