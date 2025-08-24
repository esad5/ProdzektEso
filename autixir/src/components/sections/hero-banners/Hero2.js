import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage31 from "@/assets/img/slider/31.png";
import heroBgImage31 from "@/assets/img/slider/31-bg.png";
const Hero2 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-4 ">
      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 text-color-white bg-image"
          data-bs-bg={heroBgImage31.src}
        >
          <div className="ltn__slide-item-inner text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h6 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                        {"//  any kind of car you will get  //"}
                      </h6>
                      <h1 className="slide-title animated ">
                        Professional Car <br /> Service Provide
                      </h1>
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
                  <div className="ltn__slide-animation">
                    <div className="slide-item-img">
                      <Link href="/shop">
                        <Image src={heroImage31} alt="#" placeholder="blur" />
                      </Link>
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

export default Hero2;
