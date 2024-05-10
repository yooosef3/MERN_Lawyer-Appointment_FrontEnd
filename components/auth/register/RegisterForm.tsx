"use client";

import Image from "next/image";
import ImageToBase64 from "@/lib/ImageToBase64";
import Link from "next/link";
import Loader from "@/components/Loader";
import avatar from "@/public/images/lawyers/Netflix-avatar.png";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRegister } from "@/api/MyUserApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profile: string;
};
const RegisterForm = () => {
  const router = useRouter();
  const [userImage, setUserImage] = useState("");
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
    toast.error('سایز عکس نباید بیش از 5mb باشد!');
  }

  const handleImageChange = async (e:any) => {
    const file = e.target.files && e.target.files[0];
    const userProfile = await ImageToBase64(file);
    setUserImage(userProfile);
  };

  const onSubmit = handleSubmit(async (data) => {
    const userData = {
      ...data,
      profile: userImage,
    };
    mutate(userData);
  });

  return (
    <form
      className="flex flex-col gap-5 w-[350px] lg:w-[400px] rounded-xl shadow-md p-5 bg-white/50"
      onSubmit={onSubmit}
    >
      <div className="flex justify-center items-center ">
          <div className="w-20 h-20 rounded-full bg-slate-100 relative overflow-hidden drop-shadow-md shadow-md">
            <Image src={userImage || avatar} width={300} height={300} alt="sign up" />

            <label htmlFor="profileImage">
              <div className="text-center absolute bottom-0 w-full h-1/3 bg-slate-600 bg-opacity-80 cursor-pointer">
                <p className="text-xs drop-shadow py-1 text-slate-100">
                  آپلود عکس
                </p>
              </div>
              <input
                type={"file"}
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
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
