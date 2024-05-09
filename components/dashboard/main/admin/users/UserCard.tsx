import Image from "next/image";
import { UserCardProps } from "@/app/types/types";

const UserCard = ({
    name,
    email,
    isLawyer,
    isAdmin,
    profile
}:UserCardProps) => {
  return (
    <tr className={` ${isAdmin ? "bg-green-100": "odd:bg-slate-50 hover:bg-black/10"}  py-5 duration-200`}>
      <td className="py-4 px-4 border-b">
        <div className="flex items-center gap-3 group">
          <Image
            width={300}
            height={300}
            alt="doctor"
            src={profile}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-slate-700 font-semibold group-hover:text-blue duration-200">
              {name}
            </h2>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h3 className="text-slate-700 font-semibold">{email}</h3>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        <div>
          <h2 className="text-slate-700 font-semibold">1402/02/30</h2>
        </div>
      </td>
      <td className="py-2 px-4 border-b">
        {isLawyer ? <h3 className="text-green-700 px-3 bg-green-200 w-fit text-sm rounded-md font-semibold">هست</h3> : <h3 className="text-red-700 px-3 bg-red-200 w-fit text-sm rounded-md font-semibold">نیست</h3>}
      </td>
      <td className="py-2 px-4 border-b">
        {isAdmin ? <h3 className="text-green-700 px-3 bg-green-200 w-fit text-sm rounded-md font-semibold">هست</h3> : <h3 className="text-red-700 px-3 bg-red-200 w-fit text-sm rounded-md font-semibold">نیست</h3>}
      </td>
    </tr>
  );
};

export default UserCard;
