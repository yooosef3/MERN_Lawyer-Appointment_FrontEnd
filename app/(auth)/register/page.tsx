"use client";

import React from "react";
import RegisterForm from "@/components/auth/register/RegisterForm";
import register from "../../../public/images/auth/bg-01.webp";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const token = localStorage?.getItem("token") || "";
  if (token) return router.push("/dashboard");
  return (
    <div
      className="bg-cover bg-no-repeat flex-center"
      style={{ backgroundImage: `url(${register.src})`, height: "100vh" }}
    >
      <RegisterForm />
    </div>
  );
};

export default Register;
