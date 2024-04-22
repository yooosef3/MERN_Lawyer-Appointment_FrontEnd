"use client";

import Loader from "../Loader";
import { useSelector } from "react-redux";

const LoaderProvider = () => {
  const { loading } = useSelector((state: any) => state.alerts);

  if (loading) return <Loader />;
};

export default LoaderProvider;
