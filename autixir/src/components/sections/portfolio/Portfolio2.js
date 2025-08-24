import PortfolioCard2 from "@/components/shared/cards/PortfolioCard2";
import getAllPortfolios from "@/libs/getAllPortfolios";

const Portfolio2 = () => {
  const portfolio = getAllPortfolios()?.filter(({ id }) => id > 17 && id < 23);
  return (
    <div className="ltn__img-slider-area">
      <div className="container-fluid">
        <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
          {portfolio?.map((portfolioSingle, idx) => (
            <div key={idx} className="col-lg-12">
              <PortfolioCard2 portfolioSingle={portfolioSingle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
