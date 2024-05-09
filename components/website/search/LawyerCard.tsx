"use client";

import { FaComment, FaInternetExplorer, FaMoneyBillAlt } from "react-icons/fa";

import { AiFillLike } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import Image from "next/image";
import { LawyerProps } from "@/app/types/types";
import Tags from "@/components/Tags";
import Text from "@/components/Text";
import TextAndIcon from "@/components/TextAndIcon";
import { TiLocation } from "react-icons/ti";
import Title from "@/components/Title";
import lawyer_profile from "@/public/images/lawyers/lawyer.jpg";
import { useRouter } from "next/navigation";

const LawyerCard = ({
  firstName,
  lastName,
  skills,
  _id,
  profile,
  feePerConsultation,
  website,
  address,
  specialization,
}:LawyerProps) => {
  const router = useRouter();
  return (
    <div className="grid items-center grid-cols-1 gap-10 xl:grid-cols-[3fr_1fr] rounded-md p-5 shadow-md bg-white border">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <Image
          className="w-52 h-52 object-cover rounded-md"
          width={300}
          height={300}
          src={profile || lawyer_profile}
          alt="lawyer"
        />
        <div>
          <div className="mb-4">
            <Title smaller title={`${firstName} ${lastName}`} />
            <Text text={specialization} />
          </div>
          <div className="flex items-center gap-2">
            <GoLaw className="text-green" />
            <h2 className="text-slate-800">وکیل پایه یک دادگستری</h2>
          </div>
          <div className="flex items-center gap-2 my-1">
            <TiLocation className="text-green" />
            <span className="text-slate-800">{address}</span>
          </div>
          <a href={`https://${website}`} target="_blank" className="flex items-center gap-2 mb-5">
            <FaInternetExplorer className="text-green" />
            <span className="text-blue-800">{website}</span>
          </a>
          <Tags tags={skills} />
        </div>
      </div>
      <div className="space-y-[22px]">
        <TextAndIcon
          className="text-neutral-500"
          text="99%"
          icon={<AiFillLike />}
        />
        <TextAndIcon
          className="text-neutral-500"
          text="35 نظر"
          icon={<FaComment />}
        />
        <TextAndIcon
          className="text-neutral-500"
          text={`${feePerConsultation?.toLocaleString()} تومان در ساعت`}
          icon={<FaMoneyBillAlt />}
        />
        <button
          onClick={() => router.push(`/lawyers/${`${_id}`}`)}
          className="bg-green hover:bg-lemon-100 duration-200 text-white rounded-md w-full text-lg py-1"
        >
          مشاهده پروفایل
        </button>
      </div>
    </div>
  );
};

export default LawyerCard;
