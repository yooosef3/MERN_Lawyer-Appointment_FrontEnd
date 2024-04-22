"use client";

import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

import { FormValues } from "@/app/types/types";
import LawyerForm from "../../LawyerForm";
import Loader from "@/components/Loader";
import api from "@/configs/api";
import moment from "moment";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function LawyerProfile() {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
  const { lawyerId } = useParams();
  const [lawyer, setLawyer] = useState();

  const getLawyerData = async () => {
    try {
      const response = await api.post("api/lawyer/get-lawyer-info-by-userId", {
        userId: lawyerId,
      });
      if (response.data.success) {
        setLawyer(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading } = useQuery({
    queryKey: ["lawyer-info"],
    queryFn: getLawyerData,
  });

  const updateLawyerProfile = async (values: FormValues) => {
    try {
      const response = await api.post("api/lawyer/update-lawyer-profile", {
        ...values,
        userId: user._id,
        timings: [
          moment(values.timings[0]).format("HH:mm"),
          moment(values.timings[1]).format("HH:mm"),
        ],
      });
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("مشکلی رخ داده است!");
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updateLawyerProfile,
  });

  if (isPending || isLoading) {
    return <Loader />;
  }

  const onFinish = async (values: FormValues) => {
    mutate(values);
  };

  return (
    <>{lawyer && <LawyerForm onFinish={onFinish} initialValues={lawyer} />}</>
  );
}

export default LawyerProfile;
