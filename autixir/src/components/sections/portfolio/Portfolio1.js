import PortfolionCard from "@/components/shared/cards/PortfolionCard";
import getAllPortfolios from "@/libs/getAllPortfolios";
import React from "react";

const Portfolio1 = () => {
  const portfolio = getAllPortfolios()?.filter(({ id }) => id > 12 && id < 18);
  return (
    <div className="ltn__img-slider-area pb-100">
      <div className="container-fluid">
        <div className="row ltn__image-slider-3-active slick-arrow-1 slick-arrow-1-inner">
          {portfolio?.map((portfolioSingle, idx) => (
            <div key={idx} className="col-lg-12">
              <PortfolionCard portfolioSingle={portfolioSingle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;
