import CoverageCard from "./CoverageCard";
import React from "react";
import { getOptions } from "@/lib/data";

const Coverage = () => {
  const options = getOptions();

  return (
    <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-10">
      {options.map((option) => (
        <CoverageCard key={option.id} {...option} />
      ))}
    </div>
  );
};

export default Coverage;
