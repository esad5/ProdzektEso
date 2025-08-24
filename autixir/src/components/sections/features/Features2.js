import FeatureCard2 from "@/components/shared/cards/FeatureCard2";
import getAllFeatues from "@/libs/getAllFeatues";
import Link from "next/link";
import React from "react";

const Features2 = ({ pt }) => {
  const features = getAllFeatues()?.filter(({ id }) => id > 3 && id < 8);
  return (
    <div className={`ltn__feature-area pb-90 ${pt ? pt : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                {"//"} features {"//"}
              </h6>
              <h1 className="section-title">
                Core Features<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row ltn__custom-gutter">
          {features?.map((feature, idx) => (
            <div key={idx} className="col-lg-3 col-sm-6 col-12">
              <FeatureCard2 feature={feature} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features2;
