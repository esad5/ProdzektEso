import sliderImage41 from "@/assets/img/slider/41.jpg";
import Link from "next/link";

const Hero11 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-4 position-relative fix">
      <div className=" ltn__slide-animation-active">
        <video autoPlay muted loop id="myVideo">
          <source src="media/1.mp4" type="video/mp4" />
        </video>
        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-overlay-theme-black-30"
          data-bs-bg={sliderImage41.src}
        >
          <div className="ltn__slide-item-inner text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-car-dealer-form">
                    <div className="section-title-area ltn__section-title-2 text-center">
                      <h1 className="section-title  text-color-white">
                        Find Your{" "}
                        <span className="ltn__secondary-color-3">Perfect</span>{" "}
                        Car
                      </h1>
                    </div>
                    <div className="ltn__car-dealer-form-tab">
                      <div className="ltn__tab-menu  text-uppercase text-center mb-30">
                        <div className="nav">
                          <Link
                            className="active show"
                            data-bs-toggle="tab"
                            href="#ltn__form_tab_1_1"
                          >
                            <i className="fas fa-car"></i>All
                          </Link>
                          <Link
                            data-bs-toggle="tab"
                            href="#ltn__form_tab_1_2"
                            className=""
                          >
                            <i className="far fa-user"></i>New
                          </Link>
                          <Link
                            data-bs-toggle="tab"
                            href="#ltn__form_tab_1_3"
                            className=""
                          >
                            <i className="fas fa-cogs"></i>Used
                          </Link>
                        </div>
                      </div>
                      <div className="tab-content pb-10">
                        <div
                          className="tab-pane fade active show"
                          id="ltn__form_tab_1_1"
                        >
                          <div className="car-dealer-form-inner">
                            <form
                              action="#"
                              className="ltn__car-dealer-form-box row"
                            >
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>All Makes</option>
                                  <option>Audi</option>
                                  <option>BMW</option>
                                  <option>Honda</option>
                                  <option>Nissan</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>All Models</option>
                                  <option>Any</option>
                                  <option>6 Series (1)</option>
                                  <option>7 Series (1)</option>
                                  <option>8 Series (1)</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>Select Year</option>
                                  <option>2015</option>
                                  <option>2016</option>
                                  <option>2017</option>
                                  <option>2018</option>
                                  <option>2019</option>
                                  <option>2020</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <div className="btn-wrapper text-center mt-0">
                                  {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> --> */}
                                  <Link
                                    href="/shop-car-right-sidebar"
                                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                  >
                                    Search
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="ltn__form_tab_1_2">
                          <div className="car-dealer-form-inner">
                            <form
                              action="#"
                              className="ltn__car-dealer-form-box row"
                            >
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>All Makes</option>
                                  <option>Audi</option>
                                  <option>BMW</option>
                                  <option>Honda</option>
                                  <option>Nissan</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>All Models</option>
                                  <option>Any</option>
                                  <option>6 Series (1)</option>
                                  <option>7 Series (1)</option>
                                  <option>8 Series (1)</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>Select Year</option>
                                  <option>2015</option>
                                  <option>2016</option>
                                  <option>2017</option>
                                  <option>2018</option>
                                  <option>2019</option>
                                  <option>2020</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <div className="btn-wrapper text-center mt-0">
                                  {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> --> */}
                                  <Link
                                    href="/shop-car-right-sidebar"
                                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                  >
                                    Search
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="ltn__form_tab_1_3">
                          <div className="car-dealer-form-inner">
                            <form
                              action="#"
                              className="ltn__car-dealer-form-box row"
                            >
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>All Makes</option>
                                  <option>Audi</option>
                                  <option>BMW</option>
                                  <option>Honda</option>
                                  <option>Nissan</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>All Models</option>
                                  <option>Any</option>
                                  <option>6 Series (1)</option>
                                  <option>7 Series (1)</option>
                                  <option>8 Series (1)</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <select className="nice-select">
                                  <option>Select Year</option>
                                  <option>2015</option>
                                  <option>2016</option>
                                  <option>2017</option>
                                  <option>2018</option>
                                  <option>2019</option>
                                  <option>2020</option>
                                </select>
                              </div>
                              <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                <div className="btn-wrapper text-center mt-0">
                                  {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> --> */}
                                  <Link
                                    href="/shop-car-right-sidebar"
                                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                  >
                                    Search
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero11;
