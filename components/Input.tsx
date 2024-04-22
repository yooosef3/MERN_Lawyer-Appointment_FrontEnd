"use client";

type InputProps = {
  value: string;
  placeholder: string;
  register: any;
  message: string;
};

const Input = ({ value, placeholder, register, message }: InputProps) => {
  return (
    <input
      {...register(value, { required: message })}
      className="border bg-slate-50 h-12 outline-none focus:border-lemon-100 rounded-md px-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
