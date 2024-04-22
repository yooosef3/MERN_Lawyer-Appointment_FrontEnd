"use client";

import Option from "./Option";
import { getTabs } from "@/lib/data";
import { useState } from "react";

const Tabs = () => {
  const tabs = getTabs();
  const [selected, setSelected] = useState("mission");

  return (
    <div className="flex relative items-center gap-4">
      {tabs.map((tab) => (
        <div className="flex-1" key={tab.id}>
          <div
            onClick={() => setSelected(tab.label)}
            className={`rounded-md h-12 whitespace-nowrap lg:text-lg font-semibold bg-white hover:text-white hover:bg-green ${
              selected === tab.label && "!bg-green text-white"
            } border md:px-10 flex-center cursor-pointer duration-200`}
          >
            {tab.title}
          </div>
          {selected === tab.label && <Option text={tab.text} />}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
