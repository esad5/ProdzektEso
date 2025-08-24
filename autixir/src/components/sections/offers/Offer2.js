import React from "react";
import bannerImage4 from "@/assets/img/banner/4.jpg";
import bannerImage5 from "@/assets/img/banner/5.jpg";

import OfferCard from "@/components/shared/cards/OfferCard";
const Offer2 = ({ type }) => {
  const allOffers = [
    {
      id: 1,
      title: "Latest & Beauty",
      title2: "headlights",
      subTitle: "FROM $49.00",
      image: bannerImage4,
      category: "lights",
    },
    {
      id: 2,
      title: "Attractive Car",
      title2: "dashboard",
      subTitle: "FROM $40.00",
      image: bannerImage5,
      category: "dashboard",
    },
    {
      id: 3,
      title: "Attractive Car",
      title2: "dashboard",
      subTitle: "FROM $50.00",
      image: bannerImage5,
      category: "dashboard",
    },
  ];
  const offers = allOffers?.filter(({ id }) => id < (type === 2 ? 4 : 3));
  return (
    <div className="ltn__banner-area mt-120">
      <div className="container">
        <div className="row justify-content-center">
          {offers?.map((offer, idx) => (
            <div
              key={idx}
              className={`${type === 2 ? "col-lg-4" : "col-lg-6"}  col-md-6`}
            >
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer2;
