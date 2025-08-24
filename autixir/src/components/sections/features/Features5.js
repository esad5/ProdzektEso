import Image from "next/image";
import featureImage1 from "@/assets/img/icons/svg/8-trolley.svg";
import featureImage2 from "@/assets/img/icons/svg/9-money.svg";
import featureImage3 from "@/assets/img/icons/svg/10-credit-card.svg";
import featureImage4 from "@/assets/img/icons/svg/11-gift-card.svg";

const Features5 = () => {
  return (
    <div className="ltn__feature-area mt-35">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-6">
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <Image src={featureImage1} alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>Free shipping</h4>
                  <p>On all orders over $49.00</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <Image src={featureImage2} alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>15 days returns</h4>
                  <p>Moneyback guarantee</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <Image src={featureImage3} alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>Secure checkout</h4>
                  <p>Protected by Paypal</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <Image src={featureImage4} alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>Offer & gift here</h4>
                  <p>On all orders over</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features5;
