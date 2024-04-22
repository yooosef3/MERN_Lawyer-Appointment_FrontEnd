"use client";

import React, { useState } from "react";

import { FormValues } from "@/app/types/types";
import LawyerForm from "../../LawyerForm";
import Loader from "@/components/Loader";
import api from "@/configs/api";
import moment from "moment";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function ApplyLawyer() {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const applyLawyer = async (formData: FormValues) => {
    try {
      const response = await api.post("api/user/apply-lawyer-account", {
        ...formData,
        userId: user._id,
        timings: [
          moment(formData.timings[0]).format("HH:mm"),
          moment(formData.timings[1]).format("HH:mm"),
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
    mutationFn: applyLawyer,
  });

  if (isPending) {
    return <Loader />;
  }

  const onFinish = async (values: FormValues) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("website", values.website || "");
    formData.append("address", values.address);
    formData.append("specialization", values.specialization);
    formData.append("experience", values.experience.toString());
    formData.append("feePerConsultation", values.feePerConsultation.toString());
    values.timings.forEach((timing:string, index:number) => {
      formData.append(`timings[${index}]`, timing);
    });
    selectedSkills.forEach((skill, index) => {
      formData.append(`skills[${index}]`, skill);
    });

    // if (values.imageFile) {
    //   formData.append(`imageFile`, values.imageFile);
    // }
    const formValues = {
      ...values,
      skills: selectedSkills,
    };
    mutate(formValues);
  };

  return (
    <LawyerForm
      onFinish={onFinish}
      selectedSkills={selectedSkills}
      setSelectedSkills={setSelectedSkills}
    />
  );
}

export default ApplyLawyer;
