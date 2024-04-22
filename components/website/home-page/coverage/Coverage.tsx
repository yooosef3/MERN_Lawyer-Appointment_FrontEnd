"use client"

import CoverageItems from "./CoverageItems";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { getCoverage } from "@/lib/data";
import { useGSAP } from "@gsap/react";

const Coverage = () => {
  const coverage_Items = getCoverage();
  useGSAP(()=>{
    animateWithGsap("#couple_title", { y: 0, opacity: 1 });
  },[])
  return (
    <div className="padding mt-[550px] lg:mt-0">
      <div className="text-center mb-16 opacity-0 -translate-y-20" id="couple_title">
        <SubTitle title="موارد تحت پوشش" />
        <Title className='mt-4 mb-10' title="آنچه را پوشش می دهیم" />
      </div>
      <CoverageItems items={coverage_Items} />
    </div>
  );
};

export default Coverage;
