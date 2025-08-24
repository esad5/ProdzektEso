import image from "@/assets/img/bg/17.jpg";
import allFaq from "@/../public/fakedata/faq.json";
const getAllFaq = () => {
  const questions = allFaq.map((faq) => ({
    ...faq,
    img: faq.isVideo ? image : null,
  }));
  return questions;
};

export default getAllFaq;
