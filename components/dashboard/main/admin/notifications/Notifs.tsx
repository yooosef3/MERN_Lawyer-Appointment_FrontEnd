"use client";

import { hideLoading, showLoading } from "@/redux/alertsSlice";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import { NotificationProps } from "@/app/types/types";
import api from "@/configs/api";
import { format } from "timeago.js";
import profile from "@/public/images/dashboard/customer.jpg";
import { setUser } from "@/redux/userSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Notifs = ({ setOpenNotifs }:any) => {
  const { user } = useSelector((state: any) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const response = await api.post(
        "api/user/mark-all-notifications-as-seen",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("مشکلی رخ داده است!");
    }
  };

  return (
    <div className="absolute top-10 left-0 shadow-lg overflow-hidden rounded-lg bg-slate-50 w-72">
      <div className="flex items-center text-sm justify-between p-3 bg-[#222831]">
        <h3 className="text-white font-semibold">اعلانات</h3>
        {user?.unseenNotifications.length > 0 && (
          <h3
            onClick={() => {
              markAllAsSeen();
              setOpenNotifs(false);
            }}
            className="text-red-500 hover:text-red-700 duration-200 cursor-pointer font-semibold"
          >
            انتخاب بعنوان خوانده شده
          </h3>
        )}
      </div>
      {user?.unseenNotifications.length === 0 ? (
        <div className="bg-white px-3 py-2">
          <p className="text-gray-500 font-bold">اعلانی ندارید!</p>
        </div>
      ) : (
        <div>
          {user?.unseenNotifications?.slice(0, 3)?.map((notification:NotificationProps) => (
            <div
              key={notification._id}
              className="flex items-center px-3 bg-white hover:bg-[#f0f9fb] cursor-pointer duration-200 gap-2 border-b py-2"
            >
              <div className="grid grid-cols-[1fr_4fr] items-center gap-2">
                <Image
                  className="w-11 h-11 rounded-full"
                  width={500}
                  height={500}
                  src={profile}
                  alt="user"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">
                      {notification?.data?.name}
                    </h3>
                    <time dir="ltr" className=" text-gray-400 text-xs">
                      {format(notification.createdAt)}
                    </time>
                  </div>
                  <p className="text-gray-500 text-sm font-semibold">
                    {notification?.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2
        onClick={() => {
          router.push("/notifications");
          setOpenNotifs(false);
        }}
        className="text-gray-700 pb-1 font-semibold cursor-pointer  hover:text-gray-600 duration-200 text-center"
      >
        نمایش همه اعلانات
      </h2>
    </div>
  );
};

export default Notifs;
