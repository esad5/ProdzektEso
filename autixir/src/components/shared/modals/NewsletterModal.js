import Image from "next/image";
import newsletterImage1 from "@/assets/img/banner/newsletter-popup-1.jpg";
import newsletterIconImage1 from "@/assets/img/icons/payment.png";

const NewsletterModal = () => {
  return (
    <div className="ltn__modal-area ltn__newsletter-popup-1 ">
      <div className="modal fade" id="ltn__newsletter_popup" tabIndex="-1">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="ltn__newsletter-popup-item">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="ltn__newsletter-popup-img">
                      <Image
                        src={newsletterImage1}
                        alt="#"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 align-self-center">
                    <div className="ltn__newsletter-popup-info">
                      <h2>NEWSLETTER</h2>
                      <p>
                        Enter your email below to receive a $30 coupon, special
                        offers, exclusive discounts and more!
                      </p>

                      <form action="#" className="ltn__newsletter-popup-form">
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="btn-wrapper mt-0">
                          <button
                            type="submit"
                            className="btn theme-btn-3 btn-effect-4 text-uppercase"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* <!-- additional-info --> */}
                    <div className="additional-info d-none">
                      <p>
                        We want to give you <b>10% discount</b> for your first
                        order, <br /> Use discount code at checkout
                      </p>
                      <div className="payment-method">
                        <Image src={newsletterIconImage1} alt="#" />
                      </div>
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

export default NewsletterModal;
