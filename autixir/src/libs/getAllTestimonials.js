import allTestimonials from "@/../public/fakedata/testimonials.json";
import testImage1 from "@/assets/img/blog/1.jpg";
import testImage2 from "@/assets/img/blog/2.jpg";
import testImage3 from "@/assets/img/blog/3.jpg";
import testImage4 from "@/assets/img/blog/4.jpg";
import testImage5 from "@/assets/img/blog/5.jpg";
import testImage6 from "@/assets/img/blog/6.jpg";
import testImage7 from "@/assets/img/testimonial/3.jpg";
import testImage8 from "@/assets/img/testimonial/4.jpg";
import testImage9 from "@/assets/img/testimonial/6.jpg";
import testImage10 from "@/assets/img/testimonial/1.jpg";
import testImage12 from "@/assets/img/testimonial/2.jpg";
import testImage13 from "@/assets/img/testimonial/5.jpg";
import testImage14 from "@/assets/img/testimonial/6.jpg";
import testImage15 from "@/assets/img/testimonial/7.jpg";
import testSmallImage1 from "@/assets/img/testimonial/1.jpg";

const getAllTestimonials = () => {
  const images = [
    testImage1,
    testImage2,
    testImage3,
    testImage4,
    testImage5,
    testImage6,
    testImage7,
    testImage8,
    testImage9,
    testImage10,
    testImage15,
    testImage14,
    testImage13,
    testImage12,
    testImage10,
  ];
  const smallImages = [
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
    testSmallImage1,
  ];

  const testimonials = [...allTestimonials]?.map((testimonial, idx) => ({
    ...testimonial,
    image: images[idx],
    imageSmall: smallImages[idx],
  }));

  return testimonials;
};

export default getAllTestimonials;
