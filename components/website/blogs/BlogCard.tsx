"use client"

import { BlogCardProps } from "@/app/types/types";
import { FaCommentAlt } from "react-icons/fa";
import Image from "next/image";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const BlogCard = ({ summary, id, image, time, comments }:BlogCardProps) => {
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
      className="rounded-md blog_card opacity-0 translate-y-20 overflow-hidden bg-white shadow-md group"
    >
      <div className="h-72 overflow-hidden">
        <Image
          alt={summary}
          src={image}
          width={500}
          height={500}
          className="w-full h-full group-hover:scale-105 duration-200"
        />
      </div>
      <div className="p-5 space-y-5">
        <Title smaller title={summary} className="" />
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm">{time}</p>
          <div className="flex items-center gap-2 text-gray-400">
            <span>{comments.length}</span>
            <FaCommentAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
