"use client";

import Image from "next/image";
import { animateWithGsap } from "@/lib/animations";
import lawyer from "@/public/images/home-page/about.webp";
import { useGSAP } from "@gsap/react";

const Photo = () => {
  useGSAP(() => {
    animateWithGsap("#photo", { opacity: 1, y: 0, delay: 0.8 });
  }, []);
  return (
    <Image
      id="photo"
      src={lawyer}
      alt="about"
      className="h-full w-full object-cover opacity-0 translate-y-20"
      width={400}
      height={600}
    />
  );
};

export default Photo;
