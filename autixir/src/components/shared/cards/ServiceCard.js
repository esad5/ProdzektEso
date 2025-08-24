import Link from "next/link";
import React from "react";

const ServiceCard = ({ service, isPrimary }) => {
  const { title, services, category, imgAlt, id } = service;
  return (
    <div className="ltn__service-item-2 white-bg">
      <div className="service-item-icon">{imgAlt}</div>
      <div className="service-item-brief">
        <h6
          className={`ltn__secondary-color  ${
            isPrimary ? "text-capitalize" : "text-uppercase"
          }`}
        >
          {"//"} {category}
        </h6>
        <h3>
          <Link href={`/services/${id}`}>{title}</Link>
        </h3>
        {isPrimary ? "" : <hr />}
        <ul>
          {services?.map((service, idx) => (
            <li key={idx}>
              <span>{"//"}</span> {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
