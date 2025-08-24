import BlogCard3 from "@/components/shared/cards/BlogCard3";
import getAllBlogs from "@/libs/getAllBlogs";
import bgImage3 from "@/assets/img/bg/3.jpg";

const Blogs3 = () => {
  const blogs = getAllBlogs()?.filter(({ id }) => id < 6);
  return (
    <div
      className="ltn__blog-area bg-image-top pt-115 "
      data-bs-bg={bgImage3.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2">
              <h6 className="section-subtitle white-color">
                {"//"} blog & insights
              </h6>
              <h1 className="section-title white-color">News Feeds.</h1>
            </div>
          </div>
        </div>
        <div className="row  ltn__blog-slider-one-active slick-arrow-3 ltn__blog-3-arrow">
          {/* <!-- Blog Item --> */}
          {blogs?.map((blog, idx) => (
            <div key={idx} className="col-lg-12">
              <BlogCard3 blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs3;
