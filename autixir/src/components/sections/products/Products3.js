"use client";
import ProductCardPrimary from "@/components/shared/cards/ProductCardPrimary";
import getAllProducts from "@/libs/getAllProducts";
import Link from "next/link";

const Products3 = ({ title, subtitle, pt, type }) => {
  const wheelProducts = getAllProducts()
    ?.filter(({ collection }) => collection === "wheels")
    ?.slice(0, 6);
  const soundsProducts = getAllProducts()
    ?.filter(({ collection }) => collection === "sounds")
    .slice(0, 6);
  const featuredProducts = getAllProducts()
    ?.filter(({ collection }) => collection === "featured")
    .slice(0, 6);
  const colorsProducts = getAllProducts()
    ?.filter(({ collection }) => collection === "colors")
    .slice(0, 6);

  return (
    <section>
      <div
        className={`ltn__product-tab-area ltn__product-gutter  pb-70 ${
          pt ? pt : "pt-115"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className={`section-title-area  ${
                  type === 2 ? "" : "ltn__section-title-2 text-center"
                }`}
              >
                {type === 2 ? (
                  ""
                ) : (
                  <h6 className="section-subtitle ltn__secondary-color">
                    {subtitle ? subtitle : "// Cars"}
                  </h6>
                )}
                <h1 className="section-title">
                  {title ? title : "Car Best Deals"}
                </h1>
              </div>
              <div
                className={`ltn__tab-menu ltn__tab-menu-2 ${
                  type === 2 ? "ltn__tab-menu-top-right" : ""
                }  text-uppercase text-center`}
              >
                <div className="nav">
                  <Link
                    className="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_3_1"
                  >
                    Wheels
                  </Link>
                  <Link data-bs-toggle="tab" href="#liton_tab_3_2" className="">
                    Sounds
                  </Link>
                  <Link data-bs-toggle="tab" href="#liton_tab_3_3" className="">
                    Featured
                  </Link>
                  {type === 2 ? (
                    ""
                  ) : (
                    <Link
                      data-bs-toggle="tab"
                      href="#liton_tab_3_4"
                      className=""
                    >
                      Colors
                    </Link>
                  )}
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_tab_3_1">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* <!-- ltn__product-item --> */}
                      {wheelProducts?.map((product, idx) => (
                        <div className="col-lg-12" key={idx}>
                          <ProductCardPrimary product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* <!-- ltn__product-item --> */}
                      {soundsProducts?.map((product, idx) => (
                        <div className="col-lg-12" key={idx}>
                          <ProductCardPrimary product={product} />
                        </div>
                      ))}
                      {/* <!--  --> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_3">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* <!-- ltn__product-item --> */}
                      {featuredProducts?.map((product, idx) => (
                        <div className="col-lg-12" key={idx}>
                          <ProductCardPrimary product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {type === 2 ? (
                  ""
                ) : (
                  <div className="tab-pane fade" id="liton_tab_3_4">
                    <div className="ltn__product-tab-content-inner">
                      <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                        {/* <!-- ltn__product-item --> */}
                        {colorsProducts?.map((product, idx) => (
                          <div className="col-lg-12" key={idx}>
                            <ProductCardPrimary product={product} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products3;
