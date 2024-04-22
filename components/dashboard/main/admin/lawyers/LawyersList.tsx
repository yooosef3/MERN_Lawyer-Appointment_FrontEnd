"use client";

import React, { useContext } from "react";
import { useAllLawyers, useChangeStatus } from "@/api/MyAdminApi";

import { CollapsedContext } from "@/app/(dashboard)/layout";
import LawyerCard from "./LawyerCard";
import { LawyerProps } from "@/app/types/types";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import toast from "react-hot-toast";

const LawyersList = () => {
  const { collapsed } = useContext<any>(CollapsedContext);

  const { data: lawyers, isLoading, isError } = useAllLawyers();
  const { mutate, data, isPending, isSuccess } = useChangeStatus();
  if (isLoading || isPending) {
    return <Loader />;
  }

  if (isSuccess) {
    toast.success(data?.data?.message);
  }

  if (isError) {
    toast.error("مشکلی رخ داده است!");
  }

  const changeLawyerStatus = async (lawyer: LawyerProps, status: string) => {
    const data = {
      lawyer,
      status,
    };
    mutate(data);
  };
  return (
    <div>
      <Title smaller title="لیست وکلا" />
      <div
        className='h-[550px] sm:h-[575px] xl:h-[585px] rounded-md w-[70vw] sm:w-[84vw] lg:w-[80vw] xl:w-full overflow-scroll mt-5'
      >
        <table
          className={`${
            collapsed ? "lg:w-full" : "w-[1200px]"
          } text-right mt-5 bg-white border-collapse`}
        >
          <thead className="border-b-2 border-slate-800 bg-blue-100">
            <tr className="text-slate-800">
              <th className="py-2 px-4 border-b">نام وکیل</th>
              <th className="py-2 px-4 border-b">تخصص</th>
              <th className="py-2 px-4 border-b">تاریخ عضویت</th>
              <th className="py-2 px-4 border-b">ساعات کاری</th>
              <th className="py-2 px-4 border-b">وضعیت حساب</th>
              <th className="py-2 px-4 border-b">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {lawyers?.data?.data.map((lawyer: LawyerProps) => (
              <LawyerCard
                key={lawyer._id}
                lawyer={lawyer}
                {...lawyer}
                changeStatus={changeLawyerStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LawyersList
