import React from "react";
import TimeLine from "@/components/TimeLine";
import Title from "@/components/Title";

type EducationProps = {
  id?: number;
  title: string;
  time: string;
  info: string;
};
const Education = ({ educations }: { educations: EducationProps[] }) => {
  return (
    <div>
      <Title smaller title="تحصیلات" />
      <ol className="relative border-s mt-5 border-gray-200 dark:border-gray-700">
        {educations.map((education) => (
          <TimeLine key={education.id} {...education} />
        ))}
      </ol>
    </div>
  );
};

export default Education;
