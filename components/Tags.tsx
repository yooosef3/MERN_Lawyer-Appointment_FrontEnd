type TagsProps = {
  tags: string[] | any;
};
const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((keyword:string) => (
        <span
          key={keyword}
          className="px-4 py-1 text-gray-500 border rounded-md"
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};

export default Tags;
