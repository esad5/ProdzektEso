import allBlogs from "@/../public/fakedata/blogs.json";
import allComments from "@/../public/fakedata/blogComments.json";
import blogImage1 from "@/assets/img/blog/1.jpg";
import blogImage2 from "@/assets/img/blog/2.jpg";
import blogImage3 from "@/assets/img/blog/3.jpg";
import blogImage4 from "@/assets/img/blog/4.jpg";
import blogImage5 from "@/assets/img/blog/5.jpg";
import blogImage6 from "@/assets/img/blog/6.jpg";
import blogImage7 from "@/assets/img/blog/7.jpg";
import blogImage8 from "@/assets/img/blog/8.jpg";
import blogImage31 from "@/assets/img/blog/31.jpg";
import blogImage32 from "@/assets/img/blog/32.jpg";
import blogImage33 from "@/assets/img/blog/33.jpg";
import blogImage34 from "@/assets/img/blog/34.jpg";
import blogAuthorImage1 from "@/assets/img/blog/author.jpg";
import blogAuthorImage2 from "@/assets/img/team/2.jpg";
import blogAuthorImage3 from "@/assets/img/team/3.jpg";
import blogAuthorImage4 from "@/assets/img/team/4.jpg";
import blogAuthorImage5 from "@/assets/img/team/5.jpg";
import blogAuthorImage6 from "@/assets/img/team/6.jpg";
import blogAuthorImage7 from "@/assets/img/team/7.jpg";
import blogAuthorImage8 from "@/assets/img/team/8.jpg";
import blogAuthorImage9 from "@/assets/img/team/9.jpg";

const getAllBlogs = () => {
  const largeImages = [
    blogImage31,
    blogImage32,
    blogImage33,
    blogImage34,
    null,
    blogImage3,
    blogImage2,
    blogImage33,
    blogImage31,
    blogImage32,
    blogImage33,
    null,
    blogImage34,
    blogImage31,
    blogImage32,
    blogImage33,
    blogImage31,
    blogImage32,
    blogImage33,
    null,
    blogImage31,
    blogImage34,
    blogImage33,
    blogImage31,
    blogImage32,
    blogImage33,
    null,
    blogImage34,
    blogImage31,
    blogImage32,
    blogImage33,
  ];
  const images = [
    blogImage1,
    blogImage2,
    blogImage3,
    blogImage4,
    blogImage5,
    blogImage6,
    blogImage7,
    blogImage8,
    blogImage1,
    blogImage2,
    blogImage3,
    blogImage4,
    blogImage5,
    blogImage6,
    blogImage7,
    blogImage8,
    blogImage1,
    blogImage2,
    blogImage3,
    blogImage4,
    blogImage5,
    blogImage6,
    blogImage7,
    blogImage8,
    blogImage1,
    blogImage2,
    blogImage3,
  ];
  const authorimages = [
    blogAuthorImage1,
    blogAuthorImage2,
    blogAuthorImage3,
    blogAuthorImage4,
    blogAuthorImage5,
    blogAuthorImage6,
    blogAuthorImage7,
    blogAuthorImage8,
    blogAuthorImage9,
    blogAuthorImage1,
    blogAuthorImage2,
    blogAuthorImage3,
    blogAuthorImage4,
    blogAuthorImage5,
    blogAuthorImage6,
    blogAuthorImage7,
    blogAuthorImage8,
    blogAuthorImage9,
    blogAuthorImage1,
    blogAuthorImage2,
    blogAuthorImage3,
    blogAuthorImage4,
    blogAuthorImage5,
    blogAuthorImage6,
    blogAuthorImage7,
    blogAuthorImage8,
    blogAuthorImage9,
    ,
  ];

  const blogs = [...allBlogs]?.map((blog, idx) => ({
    ...blog,
    author: {
      ...blog?.author,
      image: authorimages[idx],
    },
    image: images[idx],
    imageLarge: largeImages[idx],
    comments: allComments?.filter(({ blogId }) => blogId === blog?.id),
  }));
  return blogs;
};

export default getAllBlogs;
