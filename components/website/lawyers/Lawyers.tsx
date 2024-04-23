"use client";

import LawyerCard from "./LawyerCard";
import { LawyerProps } from "@/app/types/types";
import Loader from "@/components/Loader";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import toast from "react-hot-toast";
import { useAllApprovedLawyers } from "@/api/MyAdminApi";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const Lawyers = () => {
  useGSAP(() => {
    animateWithGsap("#lawyers_title", { y: 0, opacity: 1 });
  }, []);
  const router = useRouter();
  const { data: lawyers, isLoading, isError } = useAllApprovedLawyers();

  if (isError) {
    toast.error("برای دسترسی به وکلا باید وارد شوید!");
    router.push("/login");
  }

  const text =
    "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ژاپن و ایران و دوست داریم شما همیشه پیروز مراحل زندگی شوید";
  return (
    <div>
      <div
        id="lawyers_title"
        className="w-fit mx-auto text-center mb-16 opacity-0 -translate-y-20"
      >
        <SubTitle title="وکلای با تجربه" />
        <Title className="mt-4 mb-10" title="با وکلای ما آشنا شوید" />
        <Text className="max-w-3xl" text={text} />
      </div>
      <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-5">
        {isLoading ? (
          <Loader />
        ) : (
          lawyers?.data?.data?.map((lawyer: LawyerProps) => (
            <LawyerCard key={lawyer._id} {...lawyer} />
          ))
        )}
      </div>
    </div>
  );
};

export default Lawyers;
