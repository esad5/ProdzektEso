import Image from "next/image";
import Link from "next/link";
import slider21Image from "@/assets/img/slider/21.png";
import slider22Image from "@/assets/img/slider/22.png";

const Slider1 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-3  section-bg-1">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <div className="slide-video mb-50">
                        <Link
                          className="ltn__video-icon-2 ltn__video-icon-2-border"
                          href="https://www.youtube.com/embed/tlThdr3O5Qo"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-play"></i>
                        </Link>
                      </div>
                      <h1 className="slide-title animated ">
                        Providing A <br /> Professional & <br /> Relaible
                        Service
                      </h1>
                      <h6 className="slide-sub-title animated">
                        <span>{"//"}</span> TALENTED ENGINEER & MECHANICS
                      </h6>
                    </div>
                  </div>
                  <div className="slide-item-img">
                    <Image src={slider21Image} alt="#" placeholder="blur" />
                    {/* <!-- product-pointer --> */}
                    <div className="ltn__product-pointer ltn__product-pointer-1">
                      <ul>
                        <li>
                          <span className="ltn__pointer-icon">
                            <i className="icon-plus"></i>
                          </span>
                          <ul>
                            <li>
                              <div className="ltn__product-pointer-inner">
                                <h5>
                                  <Link href="/shop">
                                    Brand new car for your family
                                  </Link>
                                </h5>
                                <p>
                                  Lorem ipsum dolor sit amet, cons ectetur
                                  adipisicing elit, sed
                                </p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- product-pointer --> */}
                    <div className="ltn__product-pointer ltn__product-pointer-2">
                      <ul>
                        <li>
                          <span className="ltn__pointer-icon">
                            <i className="icon-plus"></i>
                          </span>
                          <ul>
                            <li>
                              <div className="ltn__product-pointer-inner">
                                <h5>
                                  <Link href="/shop">
                                    Goodyear Assurance Finesse 235/55R18 100H
                                    BSW
                                  </Link>
                                </h5>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Fugit, dolorum?
                                </p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- product-pointer --> */}
                    <div className="ltn__product-pointer ltn__product-pointer-3">
                      <ul>
                        <li>
                          <span className="ltn__pointer-icon">
                            <i className="icon-plus"></i>
                          </span>
                          <ul>
                            <li>
                              <div className="ltn__product-pointer-inner">
                                <h5>
                                  <Link href="/shop">Bullet Proof Glasses</Link>
                                </h5>
                                <p>
                                  Lorem ipsum dolor sit amet, cons ectetur
                                  adipisicing elit, sed
                                </p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!--  --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
          <div className="ltn__slide-item-inner  text-right text-end">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h6 className="slide-sub-title ltn__secondary-color animated">
                        {"// TALENTED ENGINEER & MECHANICS"}
                      </h6>
                      <h1 className="slide-title animated ">
                        Professional Car <br /> Service Provide
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                      <div className="btn-wrapper animated">
                        <Link
                          href="/services"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          OUR SERVICES
                        </Link>
                        <Link
                          href="/about"
                          className="btn btn-transparent btn-effect-3"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item-img slide-img-left">
                    <Image src={slider22Image} alt="#" placeholder="blur" />
                    {/* <!-- product-pointer --> */}
                    <div className="ltn__product-pointer ltn__product-pointer-1">
                      <ul>
                        <li>
                          <span className="ltn__pointer-icon">
                            <i className="icon-plus"></i>
                          </span>
                          <ul>
                            <li>
                              <div className="ltn__product-pointer-inner">
                                <h5>
                                  <Link href="/shop">
                                    Brand new car for your family
                                  </Link>
                                </h5>
                                <p>
                                  Lorem ipsum dolor sit amet, cons ectetur
                                  adipisicing elit, sed
                                </p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- product-pointer --> */}
                    <div className="ltn__product-pointer ltn__product-pointer-2">
                      <ul>
                        <li>
                          <span className="ltn__pointer-icon">
                            <i className="icon-plus"></i>
                          </span>
                          <ul>
                            <li>
                              <div className="ltn__product-pointer-inner">
                                <h5>
                                  <Link href="/shop">
                                    Goodyear Assurance Finesse 235/55R18 100H
                                    BSW
                                  </Link>
                                </h5>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Fugit, dolorum?
                                </p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- product-pointer --> */}
                    <div className="ltn__product-pointer ltn__product-pointer-3">
                      <ul>
                        <li>
                          <span className="ltn__pointer-icon">
                            <i className="icon-plus"></i>
                          </span>
                          <ul>
                            <li>
                              <div className="ltn__product-pointer-inner">
                                <h5>
                                  <Link href="/shop">Bullet Proof Glasses</Link>
                                </h5>
                                <p>
                                  Lorem ipsum dolor sit amet, cons ectetur
                                  adipisicing elit, sed
                                </p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    {/* <!--  --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  --> */}
      </div>
    </div>
  );
};

export default Slider1;
