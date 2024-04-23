"use client";

import React, { useState } from "react";

import ButtonIcon from "@/components/ButtonIcon";
import { HiMiniChevronDoubleLeft } from "react-icons/hi2";
import SearchBar from "../../SearchBar";
import Typewriter from "typewriter-effect";
import banner from "@/public/images/banner.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const Landing = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 0.4 });
    gsap.to("#cta", { opacity: 1, y: -10, delay: 1 });
    gsap.to("#search", { opacity: 1, x: -10, delay: 1 });
    gsap.to("#mini", { opacity: 1, y: 10, delay: 1 });
  }, []);

  const router = useRouter();
  const [searched, setSearched] = useState("");
  const getSearchData = async (e: { preventDefault: () => void }) => {
    if (searched.length !== 0) {
      e.preventDefault();
      const city = decodeURIComponent(searched);
      const searchQuery = decodeURIComponent("searchQuery=شایان");
      const url = `/search/${city}`;
      router.push(url);
    }
  };

  return (
    <div
      className="relative bg-no-repeat bg-center md:bg-cover h-[100vh] -scale-x-[1] w-full pt-36 md:py-36 px-10 lg:px-36 flex"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      <div className="text-white -scale-x-[1] w-full relative grid items-end md:grid-cols-2">
        <div className="col-span-1 space-y-6 sm:space-y-8">
          <p
            id="mini"
            className="text-lemon font-semibold text-lg opacity-0 -translate-y-20"
          >
            به وکیل خوب خوش آمدید!
          </p>
          <h1
            id="hero"
            className="text-4xl opacity-0 sm:text-6xl lg:text-7xl lg:max-w-2xl font-bold leading-[60px] sm:leading-[90px] lg:leading-[100px]"
          >
            وکلای ما برای شما میجنگند برای{" "}
            <span className="text-lemon lg:inline-flex mr-2">
              <Typewriter
                options={{
                  strings: ["حق.", "آزادی.", "حضانت."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div
            id="cta"
            className="space-y-4 sm:space-y-8 opacity-0 translate-y-20"
          >
            <p className="text-slate-300 hidden lg:block lg:max-w-md text-lg lg:text-xl  md:!leading-10">
              ما به هزاران نفر کمک کرده ایم تا از انکارهای نادرست مبارزه در
              سراسر کشور رهایی پیدا کنند. حالا آنها به وکلای حقوقی اعتماد کردند
            </p>
            <ButtonIcon
              className="hidden lg:flex"
              lg
              label="مشاوره حقوقی"
              icon={<HiMiniChevronDoubleLeft />}
            />
          </div>
        </div>
        <SearchBar
          placeholder="نام شهر مورد نظرتان را برای دسترسی به وکلا وارد کنید ..."
          onSubmit={getSearchData}
          searched={searched}
          setSearched={setSearched}
          onLandingReset={() => setSearched("")}
        />
      </div>
    </div>
  );
};

export default Landing;
