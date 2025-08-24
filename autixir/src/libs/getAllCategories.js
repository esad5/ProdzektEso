import allCategories from "@/../public/fakedata/categories.json";
import productImage1 from "@/assets/img/product/1.png";
import productImage2 from "@/assets/img/product/2.png";
import productImage3 from "@/assets/img/product/3.png";
import productImage4 from "@/assets/img/product/4.png";
import productImage5 from "@/assets/img/product/5.png";
import productImage6 from "@/assets/img/product/6.png";
import productImage7 from "@/assets/img/product/7.png";
import productImage8 from "@/assets/img/product/8.png";
import productImage9 from "@/assets/img/product/9.png";
import productImage10 from "@/assets/img/product/10.png";
import productImage11 from "@/assets/img/product/11.png";
import productImage12 from "@/assets/img/product/12.png";

const getAllCategories = () => {
  const images = [
    productImage1,
    productImage2,
    productImage3,
    productImage4,
    productImage5,
    productImage6,
    productImage7,
    productImage8,
    productImage9,
    productImage10,
    productImage11,
    productImage12,
  ];
  const categories = allCategories.map((cateory, idx) => ({
    ...cateory,
    image: images[idx],
  }));
  return categories;
};

export default getAllCategories;
