import Image from "next/image";
import Link from "next/link";

import bannerImage1 from "@/assets/img/banner/banner-1.jpg";
const SidebarBanner = ({ image }) => {
  return (
    <div className="widget ltn__banner-widget">
      <Link href="/shop">
        <Image
          src={image ? image.src : bannerImage1.src}
          alt="Banner Image"
          width={1000}
          height={1000}
        />
      </Link>
    </div>
  );
};

export default SidebarBanner;
