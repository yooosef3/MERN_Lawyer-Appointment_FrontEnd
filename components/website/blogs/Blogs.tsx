"use client"

import BlogsItems from "./BlogsItems";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { getBlogs } from "@/lib/data";
import { useGSAP } from "@gsap/react";

const Blogs = () => {
  const blogs = getBlogs();
  useGSAP(()=>{
    animateWithGsap("#blogs_title", { y: 0, opacity: 1 });
  },[])
  return (
    <div className="padding py-44 bg-[#F8F9FA]">
      <div id="blogs_title" className="w-fit opacity-0 -translate-y-20 mx-auto text-center mb-16">
        <SubTitle title="آخرین به روز رسانی ما" />
        <Title className="mt-2 mb-7" title="مقاله ها" />
        <Text text="خیلی دور، پشت کلمه کوه ها، دور از کشورهای ژاپن و ایران و دوست داریم شما همیشه پیروز مراحل زندگی شوید" />
      </div>
      <BlogsItems blogs={blogs} />
    </div>
  );
};

export default Blogs;
