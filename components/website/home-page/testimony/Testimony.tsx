"use client"

import Slider from "./Slider";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { getReviews } from "@/lib/data";
import { useGSAP } from "@gsap/react";

const Testimony = () => {
  const reviews = getReviews();
  useGSAP(()=>{
    animateWithGsap("#review_title", { y: 0, opacity: 1 });
  },[])
  const text =
    "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند. این کشور بهشتی است که در آن قسمت های برشته جملات به سمت شما پرواز می کند.";
  return (
    <div  className="padding py-10 my-20 text-center bg-slate-50 ">
      <div className="w-fit mx-auto opacity-0 -translate-y-20" id="review_title">
        <SubTitle title="نظرات" />
        <Title className="mt-4 mb-10" title="موکلان راضی ما" />
        <Text className="max-w-3xl" text={text} />
      </div>
      <Slider reviews={reviews} />
    </div>
  );
};

export default Testimony;
