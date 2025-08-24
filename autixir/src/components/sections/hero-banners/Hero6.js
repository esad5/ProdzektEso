import DealarForm from "@/components/shared/forms/DealarForm";
import bgImage41 from "@/assets/img/slider/41.jpg";

const Hero6 = () => {
  return (
    <div className="ltn__slider-area ltn__slider-4 ">
      <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
        {/* <!-- ltn__slide-item --> */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-80"
          data-bs-bg={bgImage41.src}
        >
          <div className="ltn__slide-item-inner text-left">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-car-dealer-form">
                    <DealarForm />
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

export default Hero6;
