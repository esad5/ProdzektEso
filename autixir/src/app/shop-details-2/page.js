import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const ProductDetails2 = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ProductDetailsMain isNotSidebar={true} type={2} />
    </PageWrapper>
  );
};

export default ProductDetails2;
