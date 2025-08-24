import TestimonialCard from "@/components/shared/cards/TestimonialCard";
import getAllTestimonials from "@/libs/getAllTestimonials";
import bgImage8 from "@/assets/img/bg/8.jpg";

const Testimonials1 = () => {
  const testimonials = getAllTestimonials()?.filter(
    ({ id }) => id > 0 && id < 7
  );
  return (
    <div
      className="ltn__testimonial-area bg-image pt-115 pb-70"
      data-bs-bg={bgImage8.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} Testimonials
              </h6>
              <h1 className="section-title">
                Clients Feedbacks<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row ltn__testimonial-slider-2-active slick-arrow-3">
          {testimonials?.map((testimonial, idx) => (
            <div key={idx} className="col-lg-12">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
