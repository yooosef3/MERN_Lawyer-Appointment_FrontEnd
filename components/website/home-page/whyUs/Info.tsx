"use client";

import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { animateWithGsap } from "@/lib/animations";
import { useGSAP } from "@gsap/react";

const Info = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, delay: 0.3 });
    animateWithGsap("#mini_title", { y: 0, opacity: 1 });
    animateWithGsap("#text", { y: 0, opacity: 1 });
  }, []);
  const text =
    "رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند. این کشور بهشتی است که در آن قسمت های برشته جملات به سمت شما پرواز می کند.";
  return (
    <div className="py-20 bg-white">
      <div id="mini_title" className="opacity-0 -translate-y-20">
        <SubTitle title="خدمات" />
      </div>
      <div className="mt-2 mb-7 opacity-0" id="title">
        <Title title="چرا باید ما را انتخاب کنید؟" />
      </div>
      <div
        id="text"
        className="mb-10 leading-8 lg:max-w-60 opacity-0 translate-y-20"
      >
        <Text text={text} />
      </div>
      <Button label="مشاوره رایگان" classname="bg-green" />
    </div>
  );
};

export default Info;
