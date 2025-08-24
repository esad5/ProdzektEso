import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const ProductDetails3 = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ProductDetailsMain isNotSidebar={true} type={3} isCar={true} />
    </PageWrapper>
  );
};

export default ProductDetails3;
