"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import getAllProducts from "@/libs/getAllProducts";
import Link from "next/link";

const Products2 = ({ type, title, subtitle, isCarBrandTab }) => {
  const newProducts = getAllProducts()?.filter(
    ({ type, category }) => type === "auto" && category === "new"
  );
  const newProducts1 = newProducts?.slice(0, 5);
  const newProducts2 = newProducts?.slice(5, 10);

  const oldProducts = getAllProducts()?.filter(
    ({ type, category }) => type === "auto" && category === "old"
  );
  const oldProducts1 = oldProducts?.slice(0, 5);
  const oldProducts2 = oldProducts?.slice(5, 10);
  const usedProducts = getAllProducts()?.filter(
    ({ type, category }) => type === "auto" && category === "used"
  );
  const usedProducts1 = usedProducts?.slice(0, 5);
  const usedProducts2 = usedProducts?.slice(5, 10);

  return (
    <>
      <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className={`section-title-area ltn__section-title-2 ${
                  type === 2 ? " text-center " : ""
                }`}
              >
                <h6 className="section-subtitle ltn__secondary-color">
                  {subtitle ? subtitle : "// Cars"}
                </h6>
                <h1 className="section-title">
                  {title ? title : "Car Best Deals"}
                </h1>
              </div>
              <div
                className={`ltn__tab-menu   text-uppercase ${
                  type === 2 ? " text-center " : "ltn__tab-menu-top-right "
                }`}
              >
                <div className="nav">
                  <Link
                    className="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_2_1"
                  >
                    {isCarBrandTab ? "Audi" : "New Cars"}
                  </Link>{" "}
                  <Link data-bs-toggle="tab" href="#liton_tab_2_2">
                    {isCarBrandTab ? "Bmw" : " Old Cars"}
                  </Link>{" "}
                  {type === 2 ? (
                    <Link data-bs-toggle="tab" href="#liton_tab_2_3">
                      {isCarBrandTab ? "Cadillac" : "Used Cars"}
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_tab_2_1">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* <!-- ltn__product-item --> */}
                      {newProducts1?.map((product, idx) => (
                        <div
                          key={idx}
                          className="col-xl-3 col-lg-4 col-sm-6 col-12"
                        >
                          <ProductCard product={product} />
                          {type === 2 ? (
                            <ProductCard product={newProducts2[idx]} />
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_2_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {oldProducts1?.map((product, idx) => (
                        <div
                          key={idx}
                          className="col-xl-3 col-lg-4 col-sm-6 col-12"
                        >
                          <ProductCard product={product} />
                          {type === 2 ? (
                            <ProductCard product={oldProducts2[idx]} />
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {type === 2 ? (
                  <div className="tab-pane fade" id="liton_tab_2_3">
                    <div className="ltn__product-tab-content-inner">
                      <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                        {/* <!-- ltn__product-item --> */}
                        {usedProducts1?.map((product, idx) => (
                          <div
                            key={idx}
                            className="col-xl-3 col-lg-4 col-sm-6 col-12"
                          >
                            <ProductCard product={product} />
                            {type === 2 ? (
                              <ProductCard product={usedProducts2[idx]} />
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products2;
