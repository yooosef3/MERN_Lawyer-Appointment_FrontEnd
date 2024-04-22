"use client";

import { CollapsedContext } from "@/app/(dashboard)/layout";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import UserCard from "./UserCard";
import toast from "react-hot-toast";
import { useAllUsers } from "@/api/MyAdminApi";
import { useContext } from "react";

const UsersList = () => {
  const { collapsed } = useContext<any>(CollapsedContext);
  const { data: users, isLoading, isError } = useAllUsers();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    toast.error("مشکلی رخ داده است!");
  }
  return (
    <div>
      <Title smaller title="لیست کاربران" />
      <div className="h-[550px] sm:h-[575px] xl:h-[585px] rounded-md w-[70vw] sm:w-[84vw] lg:w-[80vw] xl:w-full overflow-scroll mt-5">
        <table
          className={`${
            collapsed ? "lg:w-full" : "w-[1200px]"
          } text-right mt-5 bg-white border-collapse`}
        >
          <thead className="border-b-2 border-slate-800 bg-blue-100">
            <tr className="text-slate-800">
              <th className="py-2 px-4 border-b">نام</th>
              <th className="py-2 px-4 border-b">ایمیل</th>
              <th className="py-2 px-4 border-b">تاریخ عضویت</th>
              <th className="py-2 px-4 border-b">وکیل</th>
              <th className="py-2 px-4 border-b">ادمین</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.data.map((user: any) => (
              <UserCard key={user._id} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
