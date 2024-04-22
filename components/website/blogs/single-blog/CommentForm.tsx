"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};
const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <>
      <h2 className="text-xl font-medium text-slate-800 my-10">یک نظر بنویس</h2>
      <form
        onSubmit={onSubmit}
        className="bg-slate-100 p-7 rounded-md shadow-md"
      >
        <div className="flex flex-col mb-5 gap-1">
          <Label htmlFor="name" label="نام" />
          <Input
            placeholder="نام"
            value="name"
            message="باید یک نام وارد کنید!"
            register={register}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-5 gap-1">
          <Label htmlFor="email" label="ایمیل" />
          <Input
            placeholder="ایمیل"
            value="email"
            message="باید یک ایمیل وارد کنید!"
            register={register}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col mb-5 gap-1">
          <Label htmlFor="message" label="متن پیام" />
          <textarea
            className="border bg-slate-50 outline-none focus:border-lemon-100 rounded-md p-5"
            placeholder="متن نظر"
            rows={4}
            {...register("message", { required: "لطفا یک متن بنویسید!" })}
          />
          {errors.message && (
            <span className="text-red-500 text-xs">
              {errors.message.message}
            </span>
          )}
        </div>
        <Button label="ارسال نظر" classname="mt-10 bg-green" />
      </form>
    </>
  );
};

export default CommentForm;
