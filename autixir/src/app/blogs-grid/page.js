import BlogGridMain from "@/components/layout/main/BlogGridMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const BlogsGrid = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <BlogGridMain />
    </PageWrapper>
  );
};

export default BlogsGrid;
