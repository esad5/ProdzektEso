import Image from "next/image";
import bgImage11 from "@/assets/img/bg/11.png";
import bgImage14 from "@/assets/img/bg/14.jpg";

const HotDeals = () => {
  return (
    <div
      className="ltn__countdown-area section-bg-1 bg-image"
      data-bs-bg={bgImage14.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="ltn__countdown-info text-center pt-100 pb-100">
              <div className="section-title-area ltn__section-title-2 mb-0">
                <h1 className="section-title">
                  Hot Deal ! Sale Up To <span>25% Off</span>
                </h1>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque consequatur sequi quisquam, aspernatur nulla minima.
              </p>
              <div
                className="ltn__countdown ltn__countdown-1 bg-white"
                data-countdown="2024/12/01"
              ></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="countdown-img d-none d-lg-block">
              <Image src={bgImage11} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
