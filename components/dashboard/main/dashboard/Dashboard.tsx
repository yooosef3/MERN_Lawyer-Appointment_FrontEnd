"use client";

import { LawyerProps } from "@/app/types/types";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";
import { useAllApprovedLawyers } from "@/api/MyAdminApi";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const { data: lawyers, isLoading, isError } = useAllApprovedLawyers();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) toast.error("مشکلی رخ داده است!");
  return (
    <div>
      {lawyers?.data.data.map((lawyer: LawyerProps) => (
        <h1
          onClick={() =>
            router.push(`/dashboard/book-appointment/${lawyer._id}`)
          }
          key={lawyer._id}
        >
          وکیل {lawyer.firstName} {lawyer.lastName}
        </h1>
      ))}
    </div>
  );
};

export default Dashboard;
