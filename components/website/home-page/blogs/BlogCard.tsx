"use client";

import { BlogCardProps } from "@/app/types/types";
import Image from "next/image";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const BlogCard = ({ title, summary, image, id }:BlogCardProps) => {
  const router = useRouter();
  useGSAP(() => {
    animateWithGsap(".blog_card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.25,
    });
  }, []);
  return (
    <div
      onClick={() => router.push(`/blogs/${id}`)}
      className="group blog_card opacity-0 translate-y-20 rounded-lg overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          className="w-full object-cover overflow-hidden h-full group-hover:scale-105 duration-200"
          width={500}
          height={500}
          src={image}
          alt={title || 'title'}
        />
        <div className="absolute top-40 right-3 w-20 h-20 rounded-full flex-center bg-green">
          <h2 className="text-white text-lg text-center font-bold">
            23 آذر 1398
          </h2>
        </div>
      </div>
      <div className="p-5 !pr-0 pb-10">
        <Title
          className="mb-4 hover:text-lemon duration-200 cursor-pointer"
          smaller
          title={title}
        />
        <Text text={summary} />
      </div>
    </div>
  );
};

export default BlogCard;
