import Image from "next/image";
import Link from "next/link";
import bannerImage4 from "@/assets/img/banner/4.jpg";
import bannerImage5 from "@/assets/img/banner/5.jpg";

const TimelineFloat = () => {
  return (
    <div className="ltn__banner-area mt-120 mt--90">
      <div className="container">
        <div className="row ltn__custom-gutter justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="ltn__banner-item ltn__banner-style-3">
              <div className="ltn__banner-img">
                <Link href="/shop">
                  <Image src={bannerImage4} alt="Image" placeholder="blur" />
                </Link>
              </div>
              <div className="ltn__banner-info">
                <div className="product-price ltn__secondary-color">
                  <strong>
                    <span>FROM $49.00</span>
                  </strong>
                </div>
                <h2 className="white-color">
                  <Link href="/shop">
                    Latest & Beauty <br />
                    Headlights
                  </Link>
                </h2>
              </div>
              <div className="banner-button">
                <Link href="/shop">
                  <i className="fas fa-arrow-right"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ltn__time-schedule-widget ltn__secondary-bg text-color-white mb-30">
              <h3>Opening Hours</h3>
              <ul>
                <li>
                  Sat - Mon <span>10:00 - 23:00</span>
                </li>
                <li>
                  Sat - Mon <span>10:00 - 23:00</span>
                </li>
                <li>
                  Sat - Mon <span>10:00 - 23:00</span>
                </li>
                <li>
                  Friday <span>Off Day</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ltn__banner-item ltn__banner-style-3">
              <div className="ltn__banner-img">
                <Link href="/shop">
                  <Image src={bannerImage5} alt="Image" placeholder="blur" />
                </Link>
              </div>
              <div className="ltn__banner-info">
                <div className="product-price ltn__secondary-color">
                  <strong>
                    <span>FROM $49.00</span>
                  </strong>
                </div>
                <h2 className="white-color">
                  <Link href="/shop">
                    Attractive Car <br />
                    Dashboard
                  </Link>
                </h2>
              </div>
              <div className="banner-button">
                <Link href="/shop">
                  <i className="fas fa-arrow-right"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineFloat;
