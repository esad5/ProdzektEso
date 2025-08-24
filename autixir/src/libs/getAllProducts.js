import allProducts from "@/../public/fakedata/products.json";
import comments from "@/../public/fakedata/productComments.json";
import reviews from "@/../public/fakedata/productReviews.json";
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
import productImage13 from "@/assets/img/product-2/1.png";
import productImage14 from "@/assets/img/product-2/2.png";
import productImage15 from "@/assets/img/product-2/3.png";
import productImage16 from "@/assets/img/product-2/4.png";
import productImage17 from "@/assets/img/product-2/5.png";
import productImage18 from "@/assets/img/product-2/6.png";
import productImage19 from "@/assets/img/product-2/7.png";
import productImage20 from "@/assets/img/product-2/8.png";
import productImage21 from "@/assets/img/product-2/9.png";
import productImage22 from "@/assets/img/product-2/10.png";
const getAllProducts = () => {
  const images = [
    productImage1.src,
    productImage2.src,
    productImage3.src,
    productImage4.src,
    productImage5.src,
    productImage6.src,
    productImage7.src,
    productImage8.src,
    productImage9.src,
    productImage10.src,
    productImage11.src,
    productImage12.src,
    productImage1.src,
    productImage2.src,
    productImage3.src,
    productImage4.src,
    productImage5.src,
    productImage6.src,
    productImage7.src,
    productImage8.src,
    productImage9.src,
    productImage3.src,
    productImage4.src,
    productImage5.src,
    productImage6.src,
    productImage13.src,
    productImage14.src,
    productImage15.src,
    productImage16.src,
    productImage17.src,
    productImage18.src,
    productImage19.src,
    productImage20.src,
    productImage21.src,
    productImage22.src,
    productImage16.src,
    productImage14.src,
    productImage13.src,
    productImage15.src,
    productImage13.src,
    productImage17.src,
    productImage13.src,
    productImage14.src,
    productImage15.src,
    productImage16.src,
    productImage17.src,
    productImage18.src,
    productImage16.src,
    productImage14.src,
    productImage13.src,
    productImage15.src,
    productImage17.src,
    productImage19.src,
    productImage20.src,
    productImage21.src,
    productImage22.src,
  ];

  const products = [...allProducts]?.map((product, idx) => ({
    ...product,

    image: images[idx],
    comments: comments?.filter(({ productId }) => productId === product?.id),
    reviews: reviews?.filter(({ productId }) => productId === product?.id),
  }));

  return products;
};

export default getAllProducts;
