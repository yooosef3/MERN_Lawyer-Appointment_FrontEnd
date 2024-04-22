"use client";

import BlogCard from "./BlogCard";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { getBlogs } from "@/lib/data";
import { useGSAP } from "@gsap/react";

const Blogs = () => {
  const blogs = getBlogs();
  useGSAP(() => {
    animateWithGsap("#blog_title", { y: 0, opacity: 1 });
  }, []);
  return (
    <div className="padding my-20">
      <div className="text-center opacity-0 -translate-y-20" id="blog_title">
        <SubTitle title="بلاگ" />
        <Title className="mt-4 mb-10" title="مقالات اخیر" />
      </div>
      <div className="grid gap-20 lg:gap-7 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard {...blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
