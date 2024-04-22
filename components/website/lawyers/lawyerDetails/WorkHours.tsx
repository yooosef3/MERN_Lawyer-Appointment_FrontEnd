import { FaClock } from "react-icons/fa";
import { LawyerProps } from "@/app/types/types";
import React from "react";

const WorkHours = ({ lawyer }: { lawyer: LawyerProps | any }) => {
  return (
    <div className="p-5 flex items-center gap-3">
      <FaClock className="text-green text-lg" />
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">شنبه تا چهارشنبه:</h2>
          <time className="text-gray-600">
            {lawyer.timings[0]} - {lawyer.timings[1]}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">چهارشنبه:</h2>
          <time className="text-gray-600">10:00 - 16:00</time>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">روزهای تعطیل:</h2>
          <time className="text-gray-600">جمعه ها و تعطیلات رسمی</time>
        </div>
      </div>
    </div>
  );
};

export default WorkHours;
