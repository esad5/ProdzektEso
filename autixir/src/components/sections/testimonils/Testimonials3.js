import TestimonialCard2 from "@/components/shared/cards/TestimonialCard2";
import getAllTestimonials from "@/libs/getAllTestimonials";
import bgImage8 from "@/assets/img/bg/8.jpg";

const Testimonials3 = () => {
  const testimonials = getAllTestimonials()?.filter(
    ({ id }) => id > 10 && id < 16
  );
  return (
    <div
      className="ltn__testimonial-area bg-image pt-115 pb-70"
      data-bs-bg={bgImage8.src}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} Recenzije
              </h6>
              <h1 className="section-title">
                Šta to klijenti misle ?<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
          {testimonials?.map((testimonial, idx) => (
            <div className="col-lg-12" key={idx}>
              <TestimonialCard2 testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;
