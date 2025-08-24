import sliderImage12 from "@/assets/img/slider/12.jpg";
import Link from "next/link";

const Hero14 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-6">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item-9 section-bg-1 bg-image"
          data-bs-bg={sliderImage12.src}
        >
          <div className="ltn__slide-item-inner">
            <div className="slide-item-info bg-overlay-white-90 text-center">
              <div className="slide-item-info-inner slide-item-info-line-no  ltn__slide-animation">
                {/* <!-- <h1 className="slide-title text-color-white text-center mb-10">SELECT YOUR VEHICLE</h1> --> */}
                <h3 className=" text-center mb-30">
                  Over <span className="ltn__secondary-color-3">20,000</span>{" "}
                  Auto and Truck Parts
                </h3>
                <div className="ltn__car-dealer-form-tab">
                  <div className="tab-content pb-10">
                    <div className="car-dealer-form-inner">
                      <form action="#" className="ltn__car-dealer-form-box row">
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-12 col-md-12">
                          <select className="nice-select">
                            <option>All Makes</option>
                            <option>Audi</option>
                            <option>BMW</option>
                            <option>Honda</option>
                            <option>Nissan</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-12 col-md-12">
                          <select className="nice-select">
                            <option>All Models</option>
                            <option>Any</option>
                            <option>6 Series (1)</option>
                            <option>7 Series (1)</option>
                            <option>8 Series (1)</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-12 col-md-12">
                          <select className="nice-select">
                            <option>Select Year</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-12 col-md-12">
                          <div className="btn-wrapper text-center mt-0">
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
  );
};

export default Hero14;
