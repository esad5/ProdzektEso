import React from "react";
import BlogAuthor from "./widgets/BlogAuthor";
import SidebarSearch from "./widgets/SidebarSearch";
import PopularBlog from "./widgets/PopularBlog";
import BlogCategories from "./widgets/BlogCategories";
import SidebarSocials from "./widgets/SidebarSocials";
import TwitterFeeds from "./widgets/TwitterFeeds";
import InstagramFeeds from "./widgets/InstagramFeeds";
import BlogTags from "./widgets/BlogTags";
import SidebarBanner from "./widgets/SidebarBanner";
import bannerImage4 from "@/assets/img/banner/banner-4.jpg";
const BlogSidebar = () => {
  return (
    <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
      {/* <!-- Author Widget --> */}
      <BlogAuthor />
      {/* <!-- Search Widget --> */}
      <SidebarSearch />
      {/* <!-- Popular Post Widget --> */}
      <PopularBlog />
      {/* <!-- Menu Widget (Category) --> */}
      <BlogCategories />
      {/* <!-- Social Media Widget --> */}
      <SidebarSocials />
      {/* <!-- Popular Post Widget (Twitter Post) --> */}
      <TwitterFeeds />
      {/* <!-- Instagram Widget --> */}
      <InstagramFeeds />
      {/* <!-- Tagcloud Widget --> */}
      <BlogTags />
      {/* <!-- Banner Widget --> */}
      <SidebarBanner image={bannerImage4} />
    </aside>
  );
};

export default BlogSidebar;
