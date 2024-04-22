import { IconType } from "react-icons/lib";

type TextAndIconProps = {
  icon: any;
  text: string;
  className?: string;
};
const TextAndIcon = ({ icon, text, className }: TextAndIconProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`${className} text-lg`}>{icon}</div>
      <span className="text-gray-500">{text}</span>
    </div>
  );
};

export default TextAndIcon;
