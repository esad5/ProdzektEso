import Image from "next/image";
import bannerImage1 from "@/assets/img/banner/1.jpg";
import bannerImage2 from "@/assets/img/banner/2.jpg";
import Link from "next/link";

const Offer = ({ mt }) => {
  return (
    <div className={`ltn__banner-area pb-90 ${mt ? mt : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ltn__banner-item">
              <div className="ltn__banner-img">
                <Link href="/shop?category=new">
                  <Image src={bannerImage1} alt="Banner Image" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ltn__banner-item">
              <div className="ltn__banner-img">
                <Link href="/shop?category=auto">
                  <Image src={bannerImage2} alt="Banner Image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
