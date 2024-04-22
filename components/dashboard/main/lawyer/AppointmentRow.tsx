"use client";

import { AppointmentProps } from "@/app/types/types";
import Image from "next/image";
import Loader from "@/components/Loader";
import React from "react";
import lawyer from "@/public/images/lawyers/lawyer.jpg";
import moment from "moment";
import toast from "react-hot-toast";
import { useChangeClientStatus } from "@/api/MyLawyerApi";

type AppointmentRowProps = {
  appointment: AppointmentProps;
  refetch: any;
};
const AppointmentRow = ({ appointment, refetch }: AppointmentRowProps) => {
  const { mutate, data, isPending, isSuccess } = useChangeClientStatus();
  if (isSuccess) {
    toast.success(data?.data?.message);
  }
  if (isPending) {
    return <Loader />;
  }
  const changeClientStatus = async (
    appointment: AppointmentProps,
    status: string
  ) => {
    const data = {
      appointmentId: appointment._id,
      status,
    };
    mutate(data);
    refetch;
  };
  return (
    <tr className="hover:bg-black/10 odd:bg-slate-50 py-5 duration-200">
      <td className="py-4 px-4 border-b">
        <div className="flex items-center gap-2 group">
          <Image
            width={300}
            height={300}
            alt="doctor"
            src={lawyer}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-slate-700 font-semibold group-hover:text-blue duration-200">
              {appointment?.userInfo?.user?.name}
            </h2>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h3 className="text-slate-700 font-semibold">
            {appointment.lawyerInfo.phoneNumber}
          </h3>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-700 font-semibold">
            {moment(appointment.selectedDay).format("DD-MM-YYYY")}{" "}
          </h2>
          <h2 className="text-blue-500 font-semibold">
            {moment(appointment.time).format("HH:mm")}
          </h2>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        {appointment.status === "pending" && (
          <div className="flex items-center gap-2">
            <h3
              onClick={() => changeClientStatus(appointment, "approved")}
              className="text-green-600 font-semibold rounded-md cursor-pointer px-3 bg-green-100"
            >
              تایید
            </h3>
            <h3
              onClick={() => changeClientStatus(appointment, "rejected")}
              className="text-red-700 font-semibold rounded-md cursor-pointer px-3 bg-red-100"
            >
              رد کردن
            </h3>
          </div>
        )}
        {appointment.status === "approved" && (
          <h3 className="text-green-600 w-fit font-semibold rounded-md px-3 bg-green-100">
            تایید شده
          </h3>
        )}
        {appointment.status === "rejected" && (
          <h3 className="text-red-600 w-fit font-semibold rounded-md px-3 bg-red-100">
            رد شده
          </h3>
        )}
      </td>
    </tr>
  );
};

export default AppointmentRow;
