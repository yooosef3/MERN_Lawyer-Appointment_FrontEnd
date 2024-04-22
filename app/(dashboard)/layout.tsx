"use client";

import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import api from "@/configs/api";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";

//@ts-ignore
export const CollapsedContext = createContext();

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const token = localStorage?.getItem("token") || "";
  if (!token) return router.push("/login");

  const getUser = async () => {
    try {
      const response = await api.post("api/user/get-user-info-by-id", {
        token: localStorage.getItem("token"),
      });
      if (response.data.success) {
        dispatch(setUser(response.data.data));
      } else {
        localStorage.clear();
        router.push("/login");
      }
    } catch (error) {
      localStorage.clear();
      router.push("/login");
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  return (
    <CollapsedContext.Provider value={{collapsed, setCollapsed}}>
      <div className="p-5 h-[100vh] bg-white">
        <div className="flex h-full gap-5">
          <aside
            className={`bg-[#1B5A90] p-2 pt-5 shadow-md top-10 rounded-md ${
              collapsed ? "w-fit" : "lg:w-[300px] lg:p-5"
            } text-white`}
          >
            <Sidebar />
          </aside>
          <div className="flex-1 space-y-5">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </div>
    </CollapsedContext.Provider>
  );
};

export default DashboardLayout;
