"use client";

import { FaClipboardList, FaHome } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

import { CollapsedContext } from "@/app/(dashboard)/layout";
import { GiClawHammer } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { MdNotificationsActive } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import logo from "../../public/images/Law-logo-design-template-on-transparent-background-PNG.png";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state: any) => state.user);
  const { collapsed }:any = useContext(CollapsedContext);
  const pathname = usePathname();
  const router = useRouter();
  const userMenu = [
    {
      id: 1,
      name: "خانه",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "نوبت ها",
      path: "/dashboard/user/appointments",
      icon: <FaClipboardList />,
    },
    {
      id: 3,
      name: "وکیل شو",
      path: "/user/apply-lawyer",
      icon: <GoLaw />,
    },
    {
      id: 4,
      name: "اعلان ها",
      path: "/notifications",
      icon: <MdNotificationsActive />,
    },
  ];

  const lawyerMenu = [
    {
      id: 1,
      name: "خانه",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "نوبت ها",
      path: "/dashboard/lawyer/appointments",
      icon: <FaClipboardList />,
    },
    {
      id: 3,
      name: "پروفایل",
      path: `/lawyer/profile/${user?._id}`,
      icon: <FaClipboardList />,
    },
    {
      id: 4,
      name: "اعلان ها",
      path: "/notifications",
      icon: <MdNotificationsActive />,
    },
  ];

  const adminMenu = [
    {
      id: 1,
      name: "خانه",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "کاربران",
      path: "/admin/users",
      icon: <HiMiniUsers />,
    },
    {
      id: 3,
      name: "لیست وکلا",
      path: "/admin/lawyerslist",
      icon: <GiClawHammer />,
    },
    {
      id: 4,
      name: "اعلان ها",
      path: "/notifications",
      icon: <MdNotificationsActive />,
    },
  ];
  const menuToBeRendered = user?.isAdmin
    ? adminMenu
    : user?.isLawyer
    ? lawyerMenu
    : userMenu;
  return (
    <>
      <div className="flex border-b pb-5 border-gray-400 flex-col items-center gap-1">
        <Image
          className={`"grayscale cursor-pointer h-12 w-12 ${
            !collapsed && "lg:h-40 lg:w-40"
          } "`}
          src={logo}
          alt="logo"
          onClick={() => router.push("/")}
        />
        <h2 className={`font-bold hidden ${!collapsed && "lg:block"}`}>
          وکیل خوب
        </h2>
      </div>
      <div className="space-y-3 mt-5">
        {menuToBeRendered.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              href={item.path}
              key={item.id}
              className={`flex items-center ${
                collapsed ? "px-1" : "lg:gap-2"
              } hover:bg-[#19C1DC] ${
                isActive ? "bg-[#19C1DC] text-white" : "text-gray-300"
              } hover:text-white cursor-pointer justify-center duration-200  px-2 py-3 rounded-md`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span
                className={`font-bold hidden ${
                  !collapsed && "lg:block"
                } w-full`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
        <div
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
          className={`flex items-center hover:bg-[#19C1DC] text-gray-300 hover:text-white cursor-pointer duration-200 gap-2 px-2 py-3 rounded-md`}
        >
          <span className="text-2xl">
            <RiLogoutCircleLine />
          </span>
          <span
            className={`font-bold hidden ${!collapsed && "lg:block"} w-full`}
          >
            خروج
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
