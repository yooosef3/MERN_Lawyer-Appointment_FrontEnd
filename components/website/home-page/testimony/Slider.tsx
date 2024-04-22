"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { ReviewProps } from "@/app/types/types";
import Text from "@/components/Text";
import Title from "@/components/Title";

export default function Slider({ reviews }: { reviews: ReviewProps[] }) {
  return (
    <>
      <Swiper
        className="w-[300px] md:w-[750px] lg:w-[1200px] mt-16 !py-10 rounded-lg "
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        breakpoints={{
          640: {
            spaceBetween: 15,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          998: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="bg-white rounded-lg py-10 shadow-md"
          >
            <div>
              <div className="relative mx-auto w-fit">
                <Image
                  width={300}
                  height={300}
                  className="w-28 ring-4 ring-lemon h-28 rounded-full"
                  alt={review.name}
                  src={review.image}
                />
                <div className="relative -top-7 w-9 h-9 rounded-full bg-white flex-center">
                  <FaQuoteLeft className="text-lemon" />
                </div>
              </div>
              <Text
                className="border-r-4 border-lemon p-7"
                text={review.text}
              />
              <Title title={review.name} smaller />
              <h3 className="mt-2 text-sm text-gray-600">{review.role}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
