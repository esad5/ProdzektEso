import React from "react";

const SkillProgross = () => {
  return (
    <div className="ltn__progress-bar-wrap">
      <div className="section-title-area ltn__section-title-2">
        <h6 className="section-subtitle ltn__secondary-color">{"//"} usluge</h6>
        <h1 className="section-title">
          Najbolje osoblje<span>.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="ltn__progress-bar-inner">
        <div className="ltn__progress-bar-item">
          <p>Popravci auta</p>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay=".5s"
              role="progressbar"
              style={{ width: "72%" }}
            >
              <span>72%</span>
            </div>
          </div>
        </div>
        <div className="ltn__progress-bar-item">
          <p>Rentanje auta</p>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay=".5s"
              role="progressbar"
              style={{ width: "74%" }}
            >
              <span>74%</span>
            </div>
          </div>
        </div>
        <div className="ltn__progress-bar-item">
          <p>Čišćenje i nabavka djelova</p>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay=".5s"
              role="progressbar"
              style={{ width: "81%" }}
            >
              <span>81%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgross;
