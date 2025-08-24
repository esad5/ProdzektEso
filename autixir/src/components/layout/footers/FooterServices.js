import getAllServices from "@/libs/getAllServices";
import Link from "next/link";
import React from "react";

const FooterServices = () => {
  const services = getAllServices()?.filter(({ id }) => id > 6 && id < 17);
  const services1 = services.slice(0, 6);
  const services2 = services.slice(6, 10);

  return (
    <div className="col-xl-5 col-md-7">
      <div className="footer-widget footer-menu-widget footer-menu-widget-2-column clearfix">
        <h4 className="footer-title">Usluge.</h4>
        <div className="footer-menu">
          <ul>
            {services1?.map(({ title, id }, idx) => (
              <li key={idx}>
                <Link href={`/services/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-menu">
          <ul>
            {services2?.map(({ title, id }, idx) => (
              <li key={idx}>
                <Link href={`/services/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterServices;
