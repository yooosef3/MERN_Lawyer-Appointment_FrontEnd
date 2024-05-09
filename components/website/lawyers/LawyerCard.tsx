"use client"

import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

import Image from "next/image";
import { LawyerProps } from "@/app/types/types";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const LawyerCard = ({_id, specialization, profile, firstName, lastName}:LawyerProps) => {
  const router = useRouter();
  const socials = [
    { id: 1, icon: <FaLinkedinIn /> },
    { id: 2, icon: <FaInstagram /> },
    { id: 3, icon: <FaTelegramPlane /> },
  ];
  
  useGSAP(() => {
    animateWithGsap(".lawyer_card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.25,
    });
  }, []);
  
  return (
    <div
      onClick={() => router.push(`/lawyers/${`${_id}`}`)}
      className="overflow-hidden group rounded-md lawyer_card opacity-0 translate-y-20"
    >
      <div className="h-80 overflow-hidden">
        <Image
          alt="lawyer"
          src={profile}
          width={900}
          height={900}
          className="h-full object-cover group-hover:scale-105 duration-200"
        />
      </div>
      <div className="p-5 !pr-0">
        <Title smaller className="!text-slate-700" title={`${firstName} ${lastName}`} />
        <SubTitle
          title={specialization}
          className="mb-4 text-sm mt-1 font-medium"
        />
        <Text
          className="mb-5"
          text="من یک کاری جاه طلب هستم، اما جدای از آن، یک فرد بسیار ساده هستم."
        />
        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <span className="text-green duration-200 cursor-pointer hover:text-lemon-500">
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
