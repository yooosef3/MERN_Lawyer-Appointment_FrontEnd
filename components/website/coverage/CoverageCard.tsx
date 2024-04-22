"use client";

import { CoverProps } from "@/app/types/types";
import Image from "next/image";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const CoverageCard = ({ name, info, image, id }:CoverProps) => {
  const router = useRouter();
  useGSAP(() => {
    animateWithGsap(".coverage_card", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.25,
    });
  }, []);
  return (
    <div
      onClick={() => router.push(`/coverage/${id}`)}
      className="flex flex-col coverage_card group items-center justify-center gap-4 rounded-md border p-7 bg-slate-50 cursor-pointer duration-200 hover:shadow-lg opacity-0 translate-y-20"
    >
      <div className="flex-center overflow-hidden w-24 h-24 rounded-full border">
        <Image
          alt={name || 'cover'}
          src={image}
          width={500}
          height={500}
          className="w-full object-cover bg-center"
        />
      </div>
      <Title
        smaller
        title={name}
        className=""
      />
      <Text
        text={info}
        className="text-center"
      />
    </div>
  );
};

export default CoverageCard;
