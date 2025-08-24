import Image from "next/image";
import Link from "next/link";
import productImage1 from "@/assets/img/product/1.png";
import productImage9 from "@/assets/img/product/9.png";
import productImage11 from "@/assets/img/product/11.png";

const Hero7 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-6 mb-120---">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item section-bg-1">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-7 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                        Welcome to our shop
                      </h4>
                      <h1 className="slide-title  animated">
                        Get $250 In Total Discounts On A New Set Of Tires
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          Predictive analytics is drastically changing the real
                          estate industry. In the past, providing data for quick
                        </p>
                      </div>
                      <div className="btn-wrapper  animated">
                        <Link
                          href="/shop"
                          className="theme-btn-1 btn btn-effect-1 text-uppercase"
                        >
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-5 align-self-center">
                  <div className="slide-item-img">
                    <Link href="/shop">
                      <Image src={productImage1} alt="Image" priority={false} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item section-bg-1">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-sm-5 align-self-center">
                  <div className="slide-item-img">
                    <Link href="/shop">
                      <Image src={productImage9} alt="Image" priority={false} />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 col-sm-7 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                        Welcome to our shop
                      </h4>
                      <h1 className="slide-title animated">
                        The Parts Of Shock Absorbers Assembly
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          Predictive analytics is drastically changing the real
                          estate industry. In the past, providing data for quick
                        </p>
                      </div>
                      <div className="btn-wrapper animated">
                        <Link
                          href="/shop"
                          className="theme-btn-1 btn btn-effect-1 text-uppercase"
                        >
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item section-bg-1">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-7 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                        Welcome to our shop
                      </h4>
                      <h1 className="slide-title  animated">
                        Get $250 In Total Discounts On A New Set Of Tires
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          Predictive analytics is drastically changing the real
                          estate industry. In the past, providing data for quick
                        </p>
                      </div>
                      <div className="btn-wrapper  animated">
                        <Link
                          href="/shop"
                          className="theme-btn-1 btn btn-effect-1 text-uppercase"
                        >
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-5 align-self-center">
                  <div className="slide-item-img">
                    <Link href="/shop">
                      <Image
                        src={productImage11}
                        alt="Image"
                        priority={false}
                      />
                    </Link>
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

export default Hero7;
