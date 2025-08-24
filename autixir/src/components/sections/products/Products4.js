import ProductCard2 from "@/components/shared/cards/ProductCard2";
import getAllProducts from "@/libs/getAllProducts";

const Products4 = ({ type, title, subtitle, pt }) => {
  const products = getAllProducts()?.filter(({ id }) => id > 0 && id < 10);

  return (
    <div className={`ltn__small-product-list-area  pb-90 ${pt ? pt : "pt-70"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`section-title-area ltn__section-title-2 ${
                type === 2 ? "text-center" : ""
              }`}
            >
              <h6 className="section-subtitle ltn__secondary-color">
                {subtitle ? subtitle : "// related products"}
              </h6>
              <h1 className="section-title">
                {title ? title : "Related Products"}
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- small-product-item --> */}
          {products?.map((product, idx) => (
            <div className="col-lg-4 col-md-6 col-12" key={idx}>
              <ProductCard2 product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products4;
