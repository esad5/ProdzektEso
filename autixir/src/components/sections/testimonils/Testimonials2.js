"use client";
import TestimonialCard3 from "@/components/shared/cards/TestimonialCard3";
import getAllTestimonials from "@/libs/getAllTestimonials";
import testimonialGallarySlider from "@/libs/testimonialGallarySlider";
import Image from "next/image";
import { useEffect } from "react";

const Testimonials2 = ({ type }) => {
  const testimonials = getAllTestimonials()?.filter(
    ({ id }) => id > 6 && id < 11
  );
  useEffect(() => {
    testimonialGallarySlider(type);
  }, [type]);
  return (
    <div
      className={`ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} Testimonials
              </h6>
              <h1 className="section-title">
                Clients Feedbacks<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`ltn__testimonial-slider-4 ltn__testimonial-slider-4-active ltn__testimonial-slider-${type} ltn__testimonial-slider-${type}-active slick-arrow-1`}
            >
              {testimonials?.map((testimonial, idx) => (
                <TestimonialCard3 key={idx} testimonial={testimonial} />
              ))}
            </div>
            <ul
              className={`ltn__testimonial-quote-menu ltn__testimonial-quote-menu-${type} d-none d-lg-block`}
            >
              {testimonials?.map(({ image }, idx) => (
                <li key={idx}>
                  <Image src={image} alt="Quote image" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials2;
