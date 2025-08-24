import sliderImage41 from "@/assets/img/slider/41.jpg";
import sliderImage41_1 from "@/assets/img/slider/41-1.png";
import Image from "next/image";
import Link from "next/link";

const Hero3 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white">
        {/* <!-- ltn__slide-item  --> */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-5 text-color-white bg-image bg-overlay-theme-black-80"
          data-bs-bg={sliderImage41.src}
        >
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <h6 className="slide-sub-title ltn__secondary-color animated">
                            {"//"} TALENTED ENGINEER & MECHANICS
                          </h6>
                          <h1 className="slide-title animated ">
                            Professional Car <br /> Service Provide
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <Link
                              href="/services"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </Link>{" "}
                            <Link
                              href="/about"
                              className="btn btn-transparent btn-effect-2 white-color"
                            >
                              LEARN MORE
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img">
                    <Image src={sliderImage41_1} alt="#" />
                    <span className="call-to-circle-1"></span>
                    {/* <!--  --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__slide-item  --> */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-5 text-color-white bg-image bg-overlay-theme-black-80"
          data-bs-bg={sliderImage41.src}
        >
          <div className="ltn__slide-item-inner text-right text-end">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <h6 className="slide-sub-title ltn__secondary-color animated">
                            {"//"} TALENTED ENGINEER & MECHANICS
                          </h6>
                          <h1 className="slide-title animated ">
                            Professional Car <br /> Service Provide
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <Link
                              href="/services"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              OUR SERVICES
                            </Link>{" "}
                            <Link
                              href="/about"
                              className="btn btn-transparent btn-effect-2 white-color"
                            >
                              LEARN MORE
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img">
                    <Image src={sliderImage41_1} alt="#" />
                    <span className="call-to-circle-1"></span>
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

export default Hero3;
