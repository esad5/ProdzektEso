import Link from "next/link";
import sliderImage41 from "@/assets/img/slider/41.jpg";

const Hero10 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-4 ">
      <div className="ltn__slide-animation-active">
        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-80"
          data-bs-bg={sliderImage41.src}
        >
          <div className="ltn__slide-item-inner text-left">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-car-dealer-form">
                    <h1 className="slide-title text-color-white text-center mb-10">
                      SELECT YOUR VEHICLE
                    </h1>
                    <h3 className="text-color-white text-center mb-30">
                      Over 20,000 Auto and Truck Parts
                    </h3>
                    <div className="ltn__car-dealer-form-tab">
                      <div className="tab-content pb-10">
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
                                  href="/shop-right-sidebar"
                                  className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                >
                                  Search Inventory
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
  );
};

export default Hero10;
