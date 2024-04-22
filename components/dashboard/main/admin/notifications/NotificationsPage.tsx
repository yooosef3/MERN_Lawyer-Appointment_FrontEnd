"use client";

import { hideLoading, showLoading } from "@/redux/alertsSlice";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import { NotificationProps } from "@/app/types/types";
import Title from "@/components/Title";
import axios from "axios";
import { format } from "timeago.js";
import lawyer from "@/public/images/lawyers/avatar-person.svg";
import { setUser } from "@/redux/userSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NotificationsPage = () => {
  const [tab, setTab] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  console.log(user?.unseenNotifications);
  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:5000/api/user/mark-all-notifications-as-seen",
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

  const deleteAll = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:5000/api/user/delete-all-notifications",
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
    <div className="bg-white p-5 rounded-lg">
      <Title smaller title="اعلان ها" />
      <div className="mt-5">
        <div className="flex">
          <span
            className={`flex-center ${
              tab === 1 ? "bg-slate-200" : "bg-slate-100"
            }  hover:bg-slate-200 h-12 text-sm text-slate-800 w-28 cursor-pointer duration-200`}
            onClick={() => setTab(1)}
          >
            خوانده نشده
          </span>
          <span
            className={`flex-center ${
              tab === 2 ? "bg-slate-200" : "bg-slate-100"
            }  hover:bg-slate-200 h-12 text-sm text-slate-800 w-28 cursor-pointer duration-200`}
            onClick={() => setTab(2)}
          >
            خوانده شده
          </span>
        </div>
        {tab === 1 ? (
          <div className="mt-4">
            <div className="max-h-[56vh] overflow-auto">
              {user?.unseenNotifications.map((notification: NotificationProps, i: number) => (
                <div
                  key={i}
                  className="border flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between p-3 rounded-md shadow-md my-3 bg-slate-50 hover:bg-slate-100 duration-200 cursor-pointer"
                  onClick={() => router.push(notification?.onClickPath || "")}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      width={300}
                      height={300}
                      alt="doctor"
                      src={lawyer}
                      className="w-12 h-12 rounded-full"
                    />
                    <h2 className="font-bold text-gray-700">
                      {notification.message}
                    </h2>
                  </div>
                  <time dir="ltr" className="text-xs text-gray-500">
                    {format(notification.createdAt)}
                  </time>
                </div>
              ))}
            </div>
            {user?.unseenNotifications.length > 0 ? (
              <h2
                onClick={() => markAllAsSeen()}
                className="w-fit text-white bg-green-800 p-2 px-5 hover:bg-green-700 rounded-md duration-200 mt-5 cursor-pointer"
              >
                انتخاب همه بعنوان خوانده شده
              </h2>
            ) : (
              <div className="rounded-md shadow-md p-7 text-center mt-5 bg-red-50">
                <h2 className="text-red-600 font-semibold">
                  در حال حاضر هیچ اعلانی وجود ندارد!
                </h2>
              </div>
            )}
          </div>
        ) : (
          tab === 2 && (
            <div className="mt-4">
              <div className="max-h-[56vh] overflow-auto">
                {user?.seenNotifications.map((notification: NotificationProps, i: number) => (
                  <div
                    key={i}
                    className="border flex items-center gap-3  p-3 rounded-md shadow-md my-3 bg-slate-50 hover:bg-slate-100 duration-200 cursor-pointer"
                    onClick={() => router.push(notification.onClickPath)}
                  >
                    <Image
                      width={300}
                      height={300}
                      alt="doctor"
                      src={lawyer}
                      className="w-12 h-12 rounded-full"
                    />
                    <h2 className="font-bold text-gray-700">
                      {notification.message}
                    </h2>
                  </div>
                ))}
              </div>

              {user?.seenNotifications.length > 0 ? (
                <h2
                  onClick={() => deleteAll()}
                  className="w-fit text-white bg-red-700 p-2 px-5 hover:bg-red-600 rounded-md duration-200 mt-5 cursor-pointer"
                >
                  حذف همه ی اعلان ها
                </h2>
              ) : (
                <div className="rounded-md shadow-md p-7 text-center mt-5 bg-red-50">
                  <h2 className="text-red-600 font-semibold">
                    همه اعلان ها حذف شده اند!
                  </h2>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
