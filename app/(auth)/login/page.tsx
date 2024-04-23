"use client";

import React, { useEffect } from "react";

import LoginForm from "@/components/auth/login/LoginForm";
import register from "../../../public/images/auth/bg-01.webp";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage?.getItem("token") || "";
    if (token) return router.push("/dashboard");
  }, []);
  return (
    <div
      className="bg-cover bg-no-repeat flex-center"
      style={{ backgroundImage: `url(${register.src})`, height: "100vh" }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
