"use client";

import SubTitle from "@/components/SubTitle";
import Tabs from "./Tabs";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";

const OurExperience = () => {
  useGSAP(() => {
    animateWithGsap("#experience", { opacity: 1, y: 0, delay: 0.5 });
  }, []);
  const text =
    "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ژاپن و ایران و  دوست داریم شما همیشه پیروز مراحل زندگی شوید";
  return (
    <div id="experience" className="lg:px-8 relative opacity-0 -translate-y-20">
      <SubTitle className="mb-2 mt-4" title="به وکیل خوب خوش آمدید" />
      <Title className="mb-7" title="ما همیشه برای پیروزی عدالت شما می جنگیم" />
      <Text className="mb-8 mt-10" text={text} />
      <Tabs />
      <div className="absolute hidden lg:block bottom-7 right-0 bg-green text-white text-2xl py-4 px-16">
        40 سال تجربه
      </div>
    </div>
  );
};

export default OurExperience;
