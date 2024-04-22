import BlogCard from "./BlogCard";
import { BlogCardProps } from "@/app/types/types";

const BlogsItems = ({ blogs }: { blogs: BlogCardProps[] }) => {
  return (
    <div className="grid gap-5 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogsItems;
