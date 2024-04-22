"use client";

import Link from "next/link";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRegister } from "@/api/MyUserApi";
import { useRouter } from "next/navigation";

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, isError, isPending, isSuccess } = useRegister();
  if (isPending) {
    return <Loader />;
  }

  if (isSuccess) {
    router.push("/login");
  }

  if (isError) {
    toast.error("مشکلی رخ داده است!");
  }

  const onSubmit = handleSubmit(async (data) => {
    mutate(data);
  });

  return (
    <form
      className="flex flex-col gap-5 w-[350px] lg:w-[400px] rounded-xl shadow-md p-5 bg-white/50"
      onSubmit={onSubmit}
    >
      <h2 className="text-xl text-gray-800 text-center font-bold border-b pb-4 border-slate-300">
        ثبت نام کن
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-600 text-sm font-bold flex-1">
          نام
          <input
            className="h-12 w-full py-2 rounded-md px-2 font-normal"
            {...register("name", { required: "باید یک نام وارد کنید!" })}
          ></input>
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-600 text-sm font-bold flex-1">
        ایمیل
        <input
          type="email"
          className=" border-none h-12 w-full py-2 outline-none focus:!border-[#F6A602] rounded-md px-2 font-normal"
          {...register("email", { required: "باید یک ایمیل وارد کنید" })}
        ></input>
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-600 text-sm font-bold flex-1">
        رمز
        <input
          type="password"
          className="border-none h-12 w-full py-2 rounded-md px-2 font-normal"
          {...register("password", {
            required: "رمزتان را وارد کنید",
            minLength: {
              value: 6,
              message: "رمز باید بیشتر از 6 کاراکتر باشد",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </label>
      <label className="text-gray-600 text-sm font-bold flex-1">
        تکرار رمز
        <input
          type="password"
          className="border-none h-12 w-full py-2 rounded-md px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "باید رمزتان را تایید کنید";
              } else if (watch("password") !== val) {
                return "رمز شما مطابقت ندارد";
              }
            },
          })}
        ></input>
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="bg-[#F6A602] duration-200 text-white p-2 font-bold hover:bg-[#db9406] text-lg rounded-md"
      >
        ثبت نام
      </button>
      <div className="flex items-center gap-2 text-xs">
        <h2 className="text-gray-500 font-medium">اکانت دارید؟</h2>
        <Link className="text-blue-600" href="/login">
          وارد شوید
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
