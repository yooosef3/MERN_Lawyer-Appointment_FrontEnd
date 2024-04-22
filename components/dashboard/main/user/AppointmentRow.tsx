import { AppointmentProps } from "@/app/types/types";
import Image from "next/image";
import React from "react";
import lawyer from "@/public/images/lawyers/lawyer.jpg";
import moment from "moment";

const AppointmentRow = ({ appointment }: { appointment: AppointmentProps }) => {
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
              {appointment.lawyerInfo.firstName}{" "}
              {appointment.lawyerInfo.lastName}
            </h2>
            <h3 className="text-slate-500 text-xs">وکیل پایه یک دادگستری</h3>
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
          <h3 className="w-fit text-yellow-600 bg-yellow-100 px-2 rounded-md font-semibold">
            در انتظار
          </h3>
        )}
        {appointment.status === "approved" && (
          <h3 className="w-fit text-green-700 bg-green-100 px-2 rounded-md font-semibold">
            تایید شد
          </h3>
        )}
        {appointment.status === "rejected" && (
          <h3 className="w-fit text-red-700 bg-red-100 px-2 rounded-md font-semibold">
            رد شد
          </h3>
        )}
      </td>
    </tr>
  );
};

export default AppointmentRow;
