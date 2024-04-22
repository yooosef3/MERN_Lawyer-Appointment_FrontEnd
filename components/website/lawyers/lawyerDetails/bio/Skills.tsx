import { FaLongArrowAltLeft } from "react-icons/fa";
import { LawyerProps } from "@/app/types/types";
import Title from "@/components/Title";

const Skills = ({ lawyer }: { lawyer: LawyerProps | any }) => {
  return (
    <>
      <Title smaller title="تخصص ها" />
      <div className="grid grid-cols-2 md:grid-cols-4 mt-5">
        {lawyer?.skills.map((skill: string) => (
          <div key={skill} className="flex items-center gap-1">
            <FaLongArrowAltLeft className="text-green" />
            <span className="text-gray-500 font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
