import React from "react";

type ButtonIconProps = {
  label: string;
  icon: any;
  lg?: boolean;
  className?: string;
};
const ButtonIcon = ({ label, icon, lg, className }: ButtonIconProps) => {
  return (
    <div
      className={`flex cursor-pointer items-center w-fit text-white gap-2 ${
        lg ? "py-2 lg:py-4 px-4 lg:px-8 lg:text-lg lg:font-bold" : "py-2 px-5"
      } ${className} rounded-md bg-lemon hover:bg-lemon-100 duration-200`}
    >
      <span>{label}</span>
      <div>{icon}</div>
    </div>
  );
};

export default ButtonIcon;
