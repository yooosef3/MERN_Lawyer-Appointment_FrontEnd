import { FcApproval } from "react-icons/fc";
import { ImBlocked } from "react-icons/im";
import Image from "next/image";
import { LawyerCardProps } from "@/app/types/types";
import lawyerProf from "@/public/images/lawyers/lawyer.jpg";

const LawyerCard = ({
  firstName,
  lastName,
  timings,
  specialization,
  status,
  profile,
  lawyer,
  changeStatus,
}:LawyerCardProps) => {
  return (
    <tr className="hover:bg-black/10 odd:bg-slate-50 py-5 duration-200">
      <td className="py-4 px-4 border-b">
        <div className="flex items-center gap-2 group">
          <Image
            width={300}
            height={300}
            alt="doctor"
            src={profile || lawyerProf}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-slate-700 font-semibold group-hover:text-blue duration-200">
              {firstName} {lastName}
            </h2>
            <h3 className="text-slate-500 text-xs">وکیل پایه یک دادگستری</h3>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h3 className="text-slate-700 font-semibold">{specialization}</h3>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h2 className="text-slate-700 font-semibold">1402/02/30</h2>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <h3 className="text-slate-700 font-semibold">
          {timings[0]} - {timings[1]}
        </h3>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h2
            className={`text-center text-sm rounded-md w-16 font-bold ${
              status === "approved"
                ? "text-green-700 bg-green-200"
                : status === "blocked"
                ? "text-gray-500 px-3 w-fit bg-gray-300"
                : "text-yellow-700 bg-yellow-200"
            }`}
          >
            {status === "approved"
              ? "تایید شده"
              : status === "blocked"
              ? "بلاک شده"
              : "در انتظار"}
          </h2>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          {status === "approved" && (
            <div onClick={() => changeStatus(lawyer, 'blocked')} className="flex cursor-pointer text-red-600 hover:text-red-700 duration-200 items-center gap-1">
              <ImBlocked />
              <span>بلاک</span>
            </div>
          )}
          {status === "pending" && (
            <div onClick={() => changeStatus(lawyer, 'approved')} className="flex cursor-pointer text-green-600 hover:text-green-700 duration-200 items-center gap-1">
              <FcApproval />
              <span>تایید</span>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default LawyerCard;
