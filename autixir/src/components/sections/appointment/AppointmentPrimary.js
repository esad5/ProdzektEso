import React from "react";

const AppointmentPrimary = () => {
  return (
    <div className="ltn__appointment-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__appointment-inner">
              <form action="#">
                <h6>Personal Information</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__lastname"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input
                        type="email"
                        name="ltn__email"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-phone ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__phone"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>
                <h6>Vehicles Information</h6>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="input-item">
                      <select className="nice-select">
                        <option>Make</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Honda</option>
                        <option>Nissan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="input-item">
                      <select className="nice-select">
                        <option>Model</option>
                        <option>Any</option>
                        <option>6 Series (1)</option>
                        <option>7 Series (1)</option>
                        <option>8 Series (1)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="input-item">
                      <select className="nice-select">
                        <option>Year</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p>
                      <label className="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> My vehicle is not
                        listed in the form above..
                      </label>
                    </p>
                  </div>
                </div>
                <h6>What type of service do you need on your vehicle?</h6>
                <div className="input-item input-item-textarea ltn__custom-icon">
                  <textarea
                    name="ltn__message"
                    placeholder="Enter message"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <h6>Special Offers</h6>
                    <div className="input-item">
                      <select className="nice-select">
                        <option>Select offers</option>
                        <option>$20 Off A/C Recharge or Repairs</option>
                        <option>$25 Off Brake Service</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <h6>Wait or Droping Off</h6>
                    <div className="input-item">
                      <select className="nice-select">
                        <option>Please Choose</option>
                        <option>Waiting</option>
                        <option>Dropping Off Vehicle</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <h6>Choose Location</h6>
                    <div className="input-item">
                      <select className="nice-select">
                        <option>Location</option>
                        <option>Melbourne (9)</option>
                        <option>Berlin (12)</option>
                        <option>New York (5)</option>
                        <option>london (7)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h6>First Choice</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item ltn__datepicker">
                          <div
                            className="input-group date"
                            data-provide="datepicker"
                          >
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Select Date"
                            />
                            <div className="input-group-addon">
                              <i className="far fa-calendar-alt"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-time">
                          <select className="nice-select">
                            <option>HH:MM</option>
                            <option>9:00 AM - 11:00 AM</option>
                            <option>11:00 AM - 13:00 PM</option>
                            <option>13:00 PM - 15:00 PM</option>
                            <option>15:00 PM - 17:00 PM</option>
                            <option>17:00 PM - 19:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h6>Second Choice (optional)</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item ltn__datepicker">
                          <div
                            className="input-group date"
                            data-provide="datepicker"
                          >
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Select Date"
                            />
                            <div className="input-group-addon">
                              <i className="far fa-calendar-alt"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-time">
                          <select className="nice-select">
                            <option>HH:MM</option>
                            <option>9:00 AM - 11:00 AM</option>
                            <option>11:00 AM - 13:00 PM</option>
                            <option>13:00 PM - 15:00 PM</option>
                            <option>15:00 PM - 17:00 PM</option>
                            <option>17:00 PM - 19:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="alert alert-warning" role="alert">
                  Please note that the date and time you requested may not be
                  available. We will contact you to confirm your actual
                  appointment details.
                </div>
                <div className="btn-wrapper text-center mt-0">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPrimary;
