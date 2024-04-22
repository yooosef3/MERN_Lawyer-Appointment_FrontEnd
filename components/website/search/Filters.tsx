import { FaCheck } from "react-icons/fa";
import { FiltersProps } from "@/app/types/types";
import { IoFilter } from "react-icons/io5";
import React from "react";
import { getSkills } from "@/lib/data";

const Filters = ({ selectedSkills, onChange }: FiltersProps) => {
  const skills = getSkills();

  const handleSkillsChange = (event: {
    target: { value: any; checked: any };
  }) => {
    const clickedSkill = event.target.value;
    const isChecked = event.target.checked;
    const newSkillsList = isChecked
      ? //@ts-ignore
        [...selectedSkills, clickedSkill]
      : //@ts-ignore
        selectedSkills.filter((skill: string) => skill !== clickedSkill);

    onChange(newSkillsList);
  };
  return (
    <div className="hidden lg:block sticky top-44 h-fit">
      <div className="flex flex-col gap-3 xl:flex-row justify-between items-center px-2">
        <div className="text-md flex items-center gap-1 text-neutral-600 font-semibold mb-2">
          <IoFilter />
          <span>فیلتر براساس مهارت ها</span>
        </div>
        <div
          onClick={() => {}}
          className="text-sm font-semibold mb-2 cursor-pointer text-blue-500 hover:text-blue-600 duration-200"
        >
          حذف فیلترها
        </div>
      </div>
      <div className="space-y-2 flex flex-col mt-5">
        {skills.map((skill) => {
          const isSelected = selectedSkills?.includes(skill.slug);
          return (
            <div className="flex relative">
              <input
                id={`skill_${skill.slug}`}
                type="checkbox"
                className="opacity-0 absolute w-full h-full inset-0"
                value={skill.slug}
                checked={isSelected}
                onChange={handleSkillsChange}
              />
              <label
                htmlFor={`skill_${skill.slug}`}
                className={`flex flex-1 items-center z-50 cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                  isSelected
                    ? "border border-green-600 text-green-600"
                    : "border border-slate-300"
                }`}
              >
                {isSelected && (
                  <FaCheck size={20} strokeWidth={3} className="ml-2" />
                )}
                {skill.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
