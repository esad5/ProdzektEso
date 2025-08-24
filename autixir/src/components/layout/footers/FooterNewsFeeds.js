import getAllBlogs from "@/libs/getAllBlogs";
import Link from "next/link";
import React from "react";

const FooterNewsFeeds = () => {
  const blogs = getAllBlogs()?.filter(({ id }) => id > 24 && id < 28);
  return (
    <div className="col-xl-3 col-md-6">
      <div className="footer-widget footer-blog-widget">
        <h4 className="footer-title">Vijesti.</h4>
        {blogs?.map(({ title, publishDate, id }, idx) => (
          <div key={idx} className="ltn__footer-blog-item">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-date">
                  <i className="far fa-calendar-alt"></i> {publishDate}
                </li>
              </ul>
            </div>
            <h4 className="ltn__blog-title">
              <Link href={`/blogs/${id}`}>{title}</Link>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNewsFeeds;
