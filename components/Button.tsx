import React from "react";

type ButtonProps = {
  label: string;
  classname?: string;
};
const Button = ({ label, classname }: ButtonProps) => {
  return (
    <button
      className={`bg-lemon ${classname} text-white hover:bg-lemon-100 duration-200 rounded-md py-2 lg:py-4 px-5 lg:px-10`}
    >
      {label}
    </button>
  );
};

export default Button;
