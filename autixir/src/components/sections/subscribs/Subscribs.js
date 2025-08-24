import bgImage8 from "@/assets/img/bg/8.jpg";
const Subscribs = () => {
  return (
    <div
      className="ltn__newsletter-area section-bg-1 bg-overlay-white-30 bg-image pt-110 pb-90"
      data-bs-bg={bgImage8.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="ltn__newsletter-inner text-center">
              <h2>We make your inbox better</h2>
              <p>
                Sign up to our newsletter to receive grooming tips, style
                inspiration, <br /> exclusive access to pre-launch product
                pricing and more.
              </p>
              <form action="#" className="ltn__form-box">
                <input type="email" name="email" placeholder="Email*" />
                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribs;
