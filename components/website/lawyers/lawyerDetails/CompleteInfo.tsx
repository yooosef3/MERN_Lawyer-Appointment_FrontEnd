"use client";

import React, { useContext, useState } from "react";

import LawyerBio from "./bio/LawyerBio";
import { LawyerInfoContext } from "./LawyerDetails";
import Location from "./Location";
import Reviews from "./reviews/Reviews";
import WorkHours from "./WorkHours";

const items = [
  { id: 1, label: "بیوگرافی", tab: "bio" },
  { id: 2, label: "آدرس", tab: "location" },
  { id: 3, label: "نظرات", tab: "reviews" },
  { id: 4, label: "ساعات کاری", tab: "hours" },
];
const CompleteInfo = () => {
  const [tabState, setTabState] = useState("bio");
  const lawyer = useContext(LawyerInfoContext);
  
  return (
    <div className="p-5 mt-10 rounded-md shadow-md border">
      <div className="grid items-center border-b grid-cols-4">
        {items.map((item) => (
          <h2
            onClick={() => setTabState(item.tab)}
            className={`border-b-2 py-4 text-xs md:text-base duration-200 text-center cursor-pointer hover:border-gray-400  hover:text-green ${
              item.tab === tabState
                ? "text-green border-green"
                : "text-slate-700"
            } font-semibold`}
          >
            {item.label}
          </h2>
        ))}
      </div>
      {tabState === "bio" && <LawyerBio lawyer={lawyer} />}
      {tabState === "location" && <Location lawyer={lawyer} />}
      {tabState === "reviews" && <Reviews />}
      {tabState === "hours" && <WorkHours lawyer={lawyer} />}
    </div>
  );
};

export default CompleteInfo;
