import { TitleProps } from "@/app/types/types";

const Title = ({ title, smaller, className }:TitleProps) => {
  return <h2 className={`text-neutral-700 font-bold ${smaller ? 'text-lg' : 'text-2xl lg:text-4xl'} ${className}`}>{title}</h2>;
};

export default Title;
