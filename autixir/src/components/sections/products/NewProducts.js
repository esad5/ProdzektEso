import ProductCardPrimary from "@/components/shared/cards/ProductCardPrimary";
import getAllProducts from "@/libs/getAllProducts";
import React from "react";

const NewProducts = ({ type }) => {
  const products = getAllProducts()?.filter(
    ({ status, type }) => type !== "auto" && status === "new"
  );
  const newProducts = products?.slice(0, 6);
  const newProducts2 = products?.slice(6, 12)?.reverse();

  return (
    <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} Parts
              </h6>
              <h1 className="section-title">Novi proizvod</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__product-slider-item-four-active slick-arrow-1">
          {/* <!-- ltn__product-item --> */}
          {newProducts?.map((product, idx) => (
            <div key={idx} className="col-lg-12">
              <ProductCardPrimary product={product} />
              {type === 2 && newProducts2?.length ? (
                <ProductCardPrimary product={newProducts2[idx]} />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
