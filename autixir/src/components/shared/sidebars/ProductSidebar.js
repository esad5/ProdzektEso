"use client";
import SidebarBanner from "./widgets/SidebarBanner";
import bannerImage2 from "@/assets/img/banner/banner-2.jpg";
import SidebarSearch from "./widgets/SidebarSearch";
import ProductTags from "./widgets/ProductTags";
import ProductCategories from "./widgets/ProductCategories";
import PriceRange from "./widgets/PriceRange";
import SidebarTopRatedProducs from "./widgets/SidebarTopRatedProducs";
import ProductSizes from "./widgets/ProductSizes";
import ProductColors from "./widgets/ProductColors";
import { useCommonContext } from "@/providers/CommonContext";
import ProductBrands from "./widgets/ProductBrands";

const ProductSidebar = () => {
  const { isCar } = useCommonContext();
  return (
    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
      {/* <!-- Category or Brands Widget --> */}
      {isCar ? <ProductBrands /> : <ProductCategories />}

      {/* <!-- Price Filter Widget --> */}
      <PriceRange />

      {/* <!-- Top Rated Product Widget --> */}
      <SidebarTopRatedProducs />

      {/* <!-- Search Widget --> */}
      <SidebarSearch />

      {/* <!-- Tagcloud Widget --> */}
      <ProductTags />

      {/* <!-- Size Widget --> */}
      <ProductSizes />

      {/* <!-- Color Widget --> */}
      <ProductColors />

      {/* <!-- Banner Widget --> */}
      <SidebarBanner image={bannerImage2} />
    </aside>
  );
};

export default ProductSidebar;
