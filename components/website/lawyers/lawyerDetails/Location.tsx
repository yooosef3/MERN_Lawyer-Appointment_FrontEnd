import { IoLocation } from "react-icons/io5";
import { LawyerProps } from "@/app/types/types";
import React from "react";
import Text from "@/components/Text";

const Location = ({ lawyer }: { lawyer: LawyerProps | any }) => {
  return (
    <div className="p-5 flex items-center gap-3">
      <IoLocation className="text-green text-lg" />
      <Text text={`${lawyer.city} ${lawyer.address}`} />
    </div>
  );
};

export default Location;
