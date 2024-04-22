import { getAreas, getBlogs } from "@/lib/data";

import RecentCard from "@/components/RecentCard";
import Tags from "@/components/Tags";
import Text from "@/components/Text";
import Title from "@/components/Title";

const SideBar = () => {
  const categories = getAreas();
  const blogs = getBlogs();
  const text =
    "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. ";
  return (
    <div>
      <div>
        <Title smaller title="موضوعات" className="mb-5" />
        {categories.map((category) => (
          <h3
            className="p-4 text-gray-500 cursor-pointer pr-0 border-b hover:text-lemon-300 duration-200"
            key={category.id}
          >
            {category.label}
          </h3>
        ))}
      </div>
      <div className="mt-16">
        <Title smaller title="مقالات اخیر" className="mb-5" />
        <div className="space-y-10">
          {blogs.slice(0, 3).map((blog) => (
            //@ts-ignore
            <RecentCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Title smaller title="کلیدواژه ها" className="mb-5" />
        <Tags tags={["جنایی", "تعرض", "دارو", "سرقت", "قتل"]} />
      </div>
      <div className="mt-16">
        <Title smaller title="توضیحات" className="mb-5" />
        <Text text={text} />
      </div>
    </div>
  );
};

export default SideBar;
