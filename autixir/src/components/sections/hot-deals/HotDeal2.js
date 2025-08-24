import Image from "next/image";
import bgImage6 from "@/assets/img/bg/6.jpg";
import bgImage11 from "@/assets/img/bg/11.png";
import productImage7 from "@/assets/img/product/7.png";

const HotDeal2 = ({ type }) => {
  return (
    <div
      className={`ltn__call-to-action-area ltn__call-to-action-4 ltn__call-to-action-4-2  ${
        type === 2 ? "section-bg-1 mt-120" : "bg-overlay-black-50 bg-image"
      }  pt-110 pb-120`}
      data-bs-bg={type === 2 ? "" : bgImage6.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`call-to-action-inner call-to-action-inner-4 ${
                type === 2 ? "" : "text-color-white "
              } text-center`}
            >
              <h2 className="ltn__secondary-color">Hurry Up!</h2>
              <h1 className="h1">Hot Deal! Sale Up To 20% off</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
                Explicabo id, unde hic molestias omnis.
              </p>
              <div
                className="ltn__countdown ltn__countdown-3 "
                data-countdown="2025/12/01"
              ></div>
              <div className="btn-wrapper animated">
                <a
                  href="/shop"
                  className="theme-btn-1 btn btn-effect-1 text-uppercase"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__call-to-4-img-1">
        <Image src={productImage7} alt="#" placeholder="blur" />
      </div>
      <div className="ltn__call-to-4-img-2">
        <Image src={bgImage11} alt="#" placeholder="blur" />
      </div>
    </div>
  );
};

export default HotDeal2;
