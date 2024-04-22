type TextProps = {
  text?: string;
  className?: string;
};
const Text = ({ text, className }: TextProps) => {
  return <p className={`${className} text-gray-500`}>{text}</p>;
};

export default Text;
