"use client";

import { FaUserGraduate } from "react-icons/fa";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";

const ServiceCard = ({ label, text }: { label: string; text: string }) => {
  useGSAP(() => {
    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.25,
    });
  }, []);
  return (
    <div className="flex flex-col items-center flex-1 gap-8 rounded-md p-7 bg-white shadow-lg lg:h-[400px] opacity-0 translate-y-20 link">
      <div className="rounded-full flex-center bg-[#F2F2F2] w-20 h-20">
        <FaUserGraduate className="text-xl text-green" />
      </div>
      <Title title={label} smaller />
      <div className="lg:max-w-[200px] text-center leading-9">
        <Text text={text} />
      </div>
    </div>
  );
};

export default ServiceCard;
