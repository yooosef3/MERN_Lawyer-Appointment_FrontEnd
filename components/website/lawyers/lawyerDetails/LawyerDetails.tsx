"use client";

import React, { createContext, useEffect, useState } from "react";

import CompleteInfo from "./CompleteInfo";
import LawyerInfo from "./LawyerInfo";
import Loader from "@/components/Loader";
import moment from "moment";
import toast from "react-hot-toast";
import { useGetLawyerById } from "@/api/MyUserApi";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export const LawyerInfoContext = createContext(null);
const LawyerDetails = () => {
  const { lawyerId }: any = useParams();
  const user = useSelector((state: any) => state.user);
  const {
    mutate: getLawyer,
    data: lawyerData,
    isPending,
    isError,
  } = useGetLawyerById();
  if (!user) {
    return null;
  }
  console.log(user);
  if (isError) toast.error("مشکلی رخ داده است!");

  useEffect(() => {
    getLawyer(lawyerId);
  }, [lawyerId]);

  const lawyer = lawyerData?.data?.data;
  if (!lawyer || isPending) {
    return <Loader />;
  }
  return (
    <LawyerInfoContext.Provider value={lawyer}>
      <div className="padding py-40">
        <LawyerInfo />
        <CompleteInfo />
      </div>
    </LawyerInfoContext.Provider>
  );
};

export default LawyerDetails;
