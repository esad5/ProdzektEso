import BlogsMain from "@/components/layout/main/BlogsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const BlogsLeftSidebar = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <BlogsMain title={"Blog Left Sidebar"} isLeftSidebar={true} />
    </PageWrapper>
  );
};

export default BlogsLeftSidebar;
