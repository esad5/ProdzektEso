import sliderImage41 from "@/assets/img/slider/41.jpg";

const Hero5 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-4 position-relative fix">
      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        {/* <!-- HTML5 VIDEO --> */}
        <video autoPlay muted loop id="myVideo" width={"1000"} height={"1000"}>
          <source src="media/1.mp4" type="video/mp4" />
        </video>

        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-30"
          data-bs-bg={sliderImage41.src}
        >
          <div className="ltn__slide-item-inner text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner ltn__slide-animation">
                      <h6 className="slide-sub-title white-color animated">
                        {"//"} TALENTED ENGINEER & MECHANICS
                      </h6>
                      <h1 className="slide-title text-uppercase white-color animated ">
                        Professional Car <br /> Service Provide
                      </h1>
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

export default Hero5;
