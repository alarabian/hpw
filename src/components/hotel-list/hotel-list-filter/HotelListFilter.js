import React from "react";

const HotelListFilter = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="listFilter">
                <div className="d-flex">
                <div className="hotelItem property w-50">
                  <h5>type of property</h5>
                  <div className="propertyCard">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        defaultValue="true"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Hotel
                      </label>
                    </div>
                    <div className="number">
                      <span>44</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Motel
                      </label>
                    </div>
                    <div className="number">
                      <span>500</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Villa
                      </label>
                    </div>
                    <div className="number">
                      <span>400</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Resort
                      </label>
                    </div>
                    <div className="number">
                      <span>77</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Farm House
                      </label>
                    </div>
                    <div className="number">
                      <span>111</span>
                    </div>
                  </div>
                </div>
                <div className="hotelItem property">
                  <h5>star category</h5>
                  <div className="propertyCard">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        defaultValue="true"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        {" "}
                        5 Star
                      </label>
                    </div>
                    <div className="number">
                      <span>200</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        {" "}
                        4 Star
                      </label>
                    </div>
                    <div className="number">
                      <span>214</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        {" "}
                        3 Star
                      </label>
                    </div>
                    <div className="number">
                      <span>144</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        {" "}
                        2 Star
                      </label>
                    </div>
                    <div className="number">
                      <span>66</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        {" "}
                        1 Star
                      </label>
                    </div>
                    <div className="number">
                      <span>10</span>
                    </div>
                  </div>
                </div>
                </div>
                <div className="hotelItem property">
                  <h5>amenities</h5>
                  <div className="propertyCard">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        defaultValue="true"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Restaurant
                      </label>
                    </div>
                    <div className="number">
                      <span>344</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Swimming Pool
                      </label>
                    </div>
                    <div className="number">
                      <span>200</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Business Facility
                      </label>
                    </div>
                    <div className="number">
                      <span>424</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Spa / Wellness
                      </label>
                    </div>
                    <div className="number">
                      <span>40</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Internet / Wifi
                      </label>
                    </div>
                    <div className="number">
                      <span>70</span>
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
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Gym
                      </label>
                    </div>
                    <div className="number">
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelListFilter;
