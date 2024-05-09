"use client";

import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { useContext, useState } from "react";

import { CollapsedContext } from "@/app/(dashboard)/layout";
import { HiBellAlert } from "react-icons/hi2";
import Image from "next/image";
import Notifs from "./main/admin/notifications/Notifs";
import admin from "@/public/images/lawyers/lawyer.jpg";
import profile from "@/public/images/lawyers/avatar-person.svg";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state: any) => state.user);
  const [openNotifs, setOpenNotifs] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {collapsed, setCollapsed} = useContext<any>(CollapsedContext)

  return (
    <div className="bg-white lg:flex items-center justify-between shadow-md p-5 rounded-md">
      {collapsed ? (
        <RiMenuFoldLine
          onClick={() => setCollapsed(false)}
          className="text-2xl hidden lg:block text-gray-600 hover:text-red-600 cursor-pointer duration-200"
        />
      ) : (
        <RiMenuUnfoldLine
          onClick={() => setCollapsed(true)}
          className="text-2xl hidden lg:block text-gray-600 hover:text-red-600 cursor-pointer duration-200"
        />
      )}
      <div className="flex items-center justify-between gap-5">
        <div className="relative order-1 lg:order-none">
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenNotifs(!openNotifs)}
          >
            {user?.unseenNotifications.length > 0 && (
              <span className="absolute -right-1 -top-2 text-sm h-4 w-4 rounded-full bg-[#1B5A90] flex-center text-white font-bold">
                {user?.unseenNotifications.length}
              </span>
            )}
            <HiBellAlert className="text-2xl text-gray-600 hover:text-gray-700 duration-200" />
          </div>
          {openNotifs && <Notifs setOpenNotifs={setOpenNotifs} />}
        </div>
        <div>
          <div onClick={() => setOpen(!open)} className="mx-2 cursor-pointer">
            <div className="flex items-center gap-3">
              <Image
                className="w-11 h-11 rounded-full"
                src={user?.profile || profile}
                width={500}
                height={600}
                alt="profile"
              />
              <h3 className="font-bold text-slate-700">{user?.name}</h3>
            </div>
          </div>
          <div
            className={`rounded-md ${
              open ? "block" : "hidden"
            } flex flex-col bg-white  shadow-md overflow-hidden absolute mt-2 w-20`}
          >
            {/* <span
              onClick={() => {
                router.push("/profile");
                setOpen(false);
              }}
              className="p-1 cursor-pointer text-gray-700 hover:text-[#1B5A90] duration-200 hover:bg-slate-50 border-b"
            >
              پروفایل
            </span> */}
            <span
              onClick={() => {
                localStorage.clear();
                router.push("/login");
                setOpen(false);
              }}
              className="p-1 cursor-pointer text-red-600 duration-200 hover:bg-slate-50"
            >
              خروج
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
