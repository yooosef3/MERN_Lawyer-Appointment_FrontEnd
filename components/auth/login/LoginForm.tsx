"use client";

import Link from "next/link";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useLogin } from "@/api/MyUserApi";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate, data, isError, isPending, isSuccess } = useLogin();

  if (isPending) {
    return <Loader />;
  }

  if (isSuccess) {
    router.push("/");
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
        ورود
      </h2>

      <label className="text-gray-600 text-sm font-bold flex-1">
        ایمیل
        <input
          type="email"
          className="border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal"
          {...register("email", { required: "باید یک ایمیل وارد کنید" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-600 text-sm font-bold flex-1">
        رمز
        <input
          type="password"
          className="border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal"
          {...register("password", {
            required: "رمزتان را وارد کنید",
            minLength: {
              value: 6,
              message: "رمز باید بیشتر از 6 کاراکتر باشد",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <button
        type="submit"
        className="bg-[#F6A602] duration-200 text-white p-2 font-bold hover:bg-[#db9406] text-lg rounded-md"
      >
        ورود
      </button>
      <div className="flex items-center gap-2 text-xs">
        <h2 className="text-gray-500 font-medium">هنوز اکانت ندارید؟</h2>
        <Link className="text-blue-600" href="/register">
          ثبت نام کنید
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
