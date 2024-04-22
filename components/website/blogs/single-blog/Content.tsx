"use client";

import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Image from "next/image";
import Tags from "@/components/Tags";
import Text from "@/components/Text";
import Title from "@/components/Title";
import blog1 from "@/public/images/blogs/blogbanner_1.jpg.webp";
import blog2 from "@/public/images/blogs/blogbanner_2.jpg.webp";
import { getBlogs } from "@/lib/data";
import { useParams } from "next/navigation";

const Content = () => {
  const blogs = getBlogs();
  const { blogId } = useParams();
  const blog = blogs.find((item) => item.id === Number(blogId));
  const text =
    "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ.";
    return (
      <div>
      <div className="h-[500px] w-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          width={900}
          height={900}
          src={blog1}
          alt="coverage"
        />
      </div>
      <div>
        <Title
          title="این یک واقعیت ثابت است که خواننده حواسش پرت شود"
          className="my-5"
        />
        <Text text={text} className="mb-10" />
        <Text text={text} />
      </div>
      <div className="mt-10">
        <Title className="mb-5" title="چطور میتوانیم کمک کنیم !" />
        <Text text={text} />
      </div>
      <div className="h-[500px] w-full mt-10 overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          width={900}
          height={900}
          src={blog2}
          alt="coverage"
          />
      </div>
      <div className="my-10 space-y-5">
        <Text text={text} />
        <Text text={text} />
        <Text text={text} />
        <Text text={text} />
      </div>
      <Tags tags={["جنایی", "تعرض", "دارو", "سرقت", "قتل"]} />
      <Comments comments={blog?.comments} />
      <CommentForm />
    </div>
  );
};

export default Content;
