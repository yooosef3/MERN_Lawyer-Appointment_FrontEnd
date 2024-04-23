"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "@/components/website/layout/Footer";
import Header from "@/components/website/layout/Header";
import api from "@/configs/api";
import { setUser } from "@/redux/userSlice";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  useEffect(() => {
    const token = localStorage?.getItem("token") || "";

    const getUser = async () => {
      try {
        const response = await api.post("api/user/get-user-info-by-id", {
          token,
        });
        if (response.data.success) {
          dispatch(setUser(response.data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      getUser();
    }
  }, [user, dispatch]);
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default PublicLayout;
