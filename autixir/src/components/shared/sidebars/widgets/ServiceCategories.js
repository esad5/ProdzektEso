import makePath from "@/libs/makePath";
import Link from "next/link";
import React from "react";
const ServiceCategories = () => {
  const categories = [
    "engine repairing",
    "car repair",
    "filters repair",
    "tire repair",
    "break repair",
    "glass repair",
  ];
  return (
    <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
      <ul>
        {categories?.map((category1, idx) => (
          <li key={idx}>
            <Link href={`/services?category=${makePath(category1)}`}>
              {category1}{" "}
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCategories;
