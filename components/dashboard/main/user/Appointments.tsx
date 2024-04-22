"use client";

import React, { useContext } from "react";

import { AppointmentProps } from "@/app/types/types";
import AppointmentRow from "./AppointmentRow";
import { CollapsedContext } from "@/app/(dashboard)/layout";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import toast from "react-hot-toast";
import { useAllAppointments } from "@/api/MyUserApi";

const Appointments = () => {
  const { collapsed } = useContext<any>(CollapsedContext);

  const {
    data: appointments,
    isLoading,
    isError,
    isSuccess,
  } = useAllAppointments();

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccess) {
    console.log("نوبت ها دریافت شدند!");
  }

  if (isError) {
    toast.error("مشکلی رخ داده است!");
  }

  return (
    <div>
      <Title smaller title="لیست نوبت ها" />
      {appointments?.data?.data?.length < 1 && (
        <div className="rounded-md shadow-md p-7 text-center mt-5 bg-red-50">
          <h2 className="text-red-600 font-semibold">
            در حال حاضر نوبتی ثبت نشده است!
          </h2>
        </div>
      )}
      {appointments?.data?.data?.length > 0 && (
        <div className="h-[550px] sm:h-[575px] xl:h-[585px] rounded-md w-[70vw] sm:w-[80vw] xl:w-full overflow-scroll mt-5">
          <table
            className={`${
              collapsed ? "lg:w-full" : "w-[1150px]"
            } text-right bg-white border-collapse`}
          >
            <thead className="border-b-2 border-slate-800 bg-blue-100">
              <tr className="text-slate-800">
                <th className="py-2 px-4 border-b">وکیل</th>
                <th className="py-2 px-4 border-b">تلفن</th>
                <th className="py-2 px-4 border-b">تاریخ و ساعت</th>
                <th className="py-2 px-4 border-b">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {appointments?.data?.data.map((appointment: AppointmentProps) => (
                <AppointmentRow
                  key={appointment._id}
                  appointment={appointment}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Appointments;
