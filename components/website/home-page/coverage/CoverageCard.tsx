import { CoverProps } from "@/app/types/types";
import { GoLaw } from "react-icons/go";
import Image from "next/image";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";

const CoverageCard = ({ title, text, image }:CoverProps) => {
  useGSAP(() => {
    animateWithGsap(".cover_card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.25,
    });
  }, []);
  return (
    <div className="rounded-md group overflow-hidden opacity-0 translate-y-20 cover_card">
      <div className="h-72 overflow-hidden">
        <Image
          className="w-full h-full group-hover:scale-105 duration-200 object-cover"
          width={500}
          height={500}
          alt={title || ''}
          src={image}
        />
      </div>
      <div className="w-20 h-20 -mt-10 mr-5 relative flex-center rounded-full bg-slate-100">
        <GoLaw size={40} className="text-[#CB8E3C]" />
      </div>
      <div className="p-5 !pr-0">
        <Title smaller title={title} className="mb-3" />
        <Text text={text} />
      </div>
    </div>
  );
};

export default CoverageCard;
