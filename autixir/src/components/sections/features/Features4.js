import Image from "next/image";
import featureImage1 from "@/assets/img/icons/svg/4-track.svg";
import featureImage2 from "@/assets/img/icons/svg/5-madel.svg";
import featureImage3 from "@/assets/img/icons/svg/6-return.svg";
import featureImage4 from "@/assets/img/icons/svg/7-support.svg";

const Features4 = ({ type, mb }) => {
  return (
    <div
      className={`ltn__feature-area  ${type === 2 ? "" : ""}  ${
        mb ? mb : "before-bg-bottom-2"
      } plr--5`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__feature-item-box-wrap ltn__border-between-column white-bg">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <Image src={featureImage1} alt="#" priority={false} />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Free home delivery</h4>
                      <p>
                        Provide free home delivery for all product over $100
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <Image src={featureImage2} alt="#" priority={false} />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Quality Products</h4>
                      <p>We ensure the product quality that is our main goal</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <Image src={featureImage3} alt="#" priority={false} />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>3 Days Return</h4>
                      <p>
                        Return product within 3 days for any product you buy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <Image src={featureImage4} alt="#" priority={false} />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Online Support</h4>
                      <p>
                        We ensure the product quality that you can trust easily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features4;
