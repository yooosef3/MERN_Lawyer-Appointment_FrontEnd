"use client";

import { FaPenNib } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  title: string;
  message: string;
};

const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  const [rating, setRating] = useState(0);
  const handleStarClick = (newRating:number) => {
    setRating(newRating);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <FaPenNib className="text-green" />
        <h2 className="text-lg text-slate-600 my-5">
          یک نظر برای <b className="text-slate-800">شهلا خدری </b> بنویس
        </h2>
      </div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          className="text-3xl cursor-pointer"
          key={value}
          style={{ color: value <= rating ? "gold" : "grey" }}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
      <form className="flex flex-col gap-5 py-5" onSubmit={onSubmit}>
        <label className="text-gray-600 text-sm font-bold flex-1">
          عنوان نظر
          <input
            type="title"
            className="border h-12 w-full py-2 mt-1 outline-none focus:border-lemon-100 rounded-md px-2 font-normal"
            {...register("title", { required: "باید یک عنوان وارد کنید" })}
          ></input>
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </label>
        <label className="text-gray-600 text-sm font-bold flex-1">
          متن نظر
          <textarea
            rows={5}
            className="border border-gray-200 w-full py-2 mt-1 outline-none focus:border-lemon-100 rounded-md px-2 font-normal"
            {...register("message", {
              required: "متن نظر را وارد کنید",
              minLength: {
                value: 20,
                message: "متن نظر باید بیشتر از 20 کاراکتر باشد",
              },
            })}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </label>
        <button
          type="submit"
          className="bg-green duration-200 text-white p-2 px-7 font-bold hover:bg-lemon-100 mt-5 rounded-md w-fit"
        >
          ثبت نظر
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
