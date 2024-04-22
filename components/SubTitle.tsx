type SubTitleProps = {
  title: string;
  className?: string;
};
const SubTitle = ({ title, className }: SubTitleProps) => {
  return (
    <h3 className={`${className} text-lemon font-bold text-lg`}>{title}</h3>
  );
};

export default SubTitle;
