"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Sidebar from "./Sidebar";
import admin from "@/public/images/lawyers/lawyer.jpg";
import { getHeaderItems } from "@/lib/data";
import logo from "@/public/images/Law-logo-design-template-on-transparent-background-PNG.png";
import profile from "@/public/images/lawyers/avatar-person.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const header_items = getHeaderItems();
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const [navbar, setNavbar] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useSelector((state: any) => state.user);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <header
        className={`flex ${navbar && "bg-black/90 backdrop-blur-md"} ${
          path !== "/" && "bg-black/90"
        } z-50 items-center fixed inset-x-0 top-0 w-full p-7 lg:px-32 justify-between mx-auto`}
      >
        <Image width={70} height={70} src={logo} alt="logo" />
        {header_items.map((item) => (
          <h3
            className={`text-xl hidden lg:block font-semibold cursor-pointer hover:text-[#A59D35] ${
              path === item.route ? "text-lemon" : "text-white"
            } duration-200`}
            key={item.id}
            onClick={() => router.push(item.route)}
          >
            {item.label}
          </h3>
        ))}
        {user ? (
          <div>
            <div
              onClick={() => setOpenProfile(!openProfile)}
              className="mx-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {user?.unseenNotifications.length > 0 && (
                    <div className="bg-red-600  -right-1 -top-2 w-4 h-4 rounded-full absolute flex-center">
                      <span className="animate-pulse text-sm flex-center text-white font-bold">
                        {user?.unseenNotifications.length}
                      </span>
                    </div>
                  )}
                  <Image
                    className="w-11 h-11 rounded-full"
                    src={user?.profile || profile}
                    width={500}
                    height={600}
                    alt="profile"
                  />
                </div>
                <h3 className="font-bold text-white">{user?.name}</h3>
              </div>
            </div>
            <div
              className={`rounded-md ${
                openProfile ? "block" : "hidden"
              } flex flex-col bg-white  shadow-md overflow-hidden absolute mt-2 w-20`}
            >
              <span
                onClick={() => {
                  router.push("/dashboard");
                  setOpenProfile(false);
                }}
                className="p-1 cursor-pointer text-gray-700 hover:text-[#1B5A90] duration-200 hover:bg-slate-50 border-b"
              >
                داشبورد
              </span>
              <span
                onClick={() => {
                  router.push("/notifications");
                  setOpenProfile(false);
                }}
                className="p-1 cursor-pointer text-gray-700 hover:text-[#1B5A90] duration-200 hover:bg-slate-50 border-b"
              >
                اعلانات
              </span>
              {!user?.isLawyer && (
                <span
                  onClick={() => {
                    router.push("/user/apply-lawyer");
                    setOpenProfile(false);
                  }}
                  className="p-1 cursor-pointer text-gray-700 hover:text-[#1B5A90] duration-200 hover:bg-slate-50 border-b"
                >
                  وکیل شو
                </span>
              )}
              <span
                onClick={() => {
                  localStorage.clear();
                  router.push("/login");
                  setOpenProfile(false);
                }}
                className="p-1 cursor-pointer text-red-600 duration-200 hover:bg-slate-50"
              >
                خروج
              </span>
            </div>
          </div>
        ) : (
          <h3
            onClick={() => router.push("/login")}
            className="text-xl hidden lg:block font-semibold cursor-pointer hover:text-[#A59D35] text-white duration-200"
          >
            ورود
          </h3>
        )}
        {open && (
          <IoClose
            onClick={() => setOpen(false)}
            className="lg:hidden text-4xl text-white hover:text-red-600 duration-200 cursor-pointer"
          />
        )}
        {!open && (
          <FiMenu
            onClick={() => setOpen(true)}
            className="lg:hidden text-4xl text-white hover:text-[#D0C941] duration-200 cursor-pointer"
          />
        )}
      </header>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
