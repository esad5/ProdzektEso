import Image from "next/image";
import productImage1 from "@/assets/img/product/1.png";
import productImage9 from "@/assets/img/product/9.png";
import productImage11 from "@/assets/img/product/11.png";
import HeroSidebar from "@/components/shared/sidebars/HeroSidebar";

const Hero15 = ({ type }) => {
  return (
    <div className="ltn__slider-area  mt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* <!-- CATEGORY-MENU-LIST START --> */}
            <HeroSidebar />
            {/* <!-- END CATEGORY-MENU-LIST --> */}
          </div>
          <div className="col-lg-9">
            <div className="ltn__slide-active-2 slick-slide-arrow-1 slick-slide-dots-1">
              {/* <!-- ltn__slide-item --> */}
              <div className="ltn__slide-item ltn__slide-item-10 section-bg-1">
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title  animated">
                              Get $50 off On A New Set Of Tires
                            </h1>
                            <div className="slide-brief animated d-none">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper  animated">
                              <a
                                href="/shop"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="/shop">
                            <Image
                              src={productImage1}
                              alt="Image"
                              placeholder="blur"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__slide-item --> */}
              <div className="ltn__slide-item ltn__slide-item-10 section-bg-1 lick-current slick-active">
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="/shop">
                            <Image
                              src={productImage9}
                              alt="Image"
                              placeholder="blur"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title animated">
                              Get $50 off On A New Set Of Tires
                            </h1>
                            <div className="slide-brief animated d-none">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper animated">
                              <a
                                href="/shop"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__slide-item --> */}
              <div className="ltn__slide-item ltn__slide-item-10 section-bg-1">
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title  animated">
                              Get $50 off On A New Set Of Tires
                            </h1>
                            <div className="slide-brief animated d-none">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper  animated">
                              <a
                                href="/shop"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="/shop">
                            <Image
                              src={productImage11}
                              alt="Image"
                              placeholder="blur"
                            />
                          </a>
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

export default Hero15;
