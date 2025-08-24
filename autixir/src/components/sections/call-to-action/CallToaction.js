import Image from "next/image";
import Link from "next/link";
import bgImage10 from "@/assets/img/bg/10.png";

const CallToaction = () => {
  return (
    <div className="ltn__get-a-free-service-area get-a-free-service-margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="get-a-free-service-inner bg-white text-center pt-115 pb-100">
              <div className="call-to-img">
                <Image src={bgImage10} alt="#" />
              </div>
              <div className="call-to-action-inner-content">
                <div className="section-title-area ltn__section-title-2 text-center">
                  <h6 className="section-subtitle ltn__secondary-color">
                    {"//"} poziv na akciju {"//"}
                  </h6>
                  <h1 className="section-title">
                     Besplatan servis automobila<span>.</span>
                  </h1>
                </div>
                <div className="btn-wrapper">
                  <Link
                    href="/appointment"
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                  >
                    zakažite termin
                  </Link>
                </div>
              </div>
              <span className="call-to-circle-1"></span>
              <span className="call-to-circle-2 fa-spin"></span>
              <span className="call-to-bg-icon">
                <i className="icon-automobile"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToaction;
