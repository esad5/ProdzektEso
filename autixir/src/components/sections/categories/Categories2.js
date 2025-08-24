import getAllCategories from "@/libs/getAllCategories";
import bgImage8 from "@/assets/img/bg/8.jpg";
import CategoryCard2 from "@/components/shared/cards/CategoryCard2";

const Categories2 = () => {
  const categories = getAllCategories()?.filter(({}, idx) => idx < 12);
  return (
    <div
      className="ltn__category-area section-bg-1 bg-image pt-115 pb-90"
      data-bs-bg={bgImage8.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area">
              <h1 className="section-title">Shop by Categories</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__category-slider-active slick-arrow-1">
          {categories?.map((category, idx) => (
            <div key={idx} className="col-12">
              <CategoryCard2 category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories2;
