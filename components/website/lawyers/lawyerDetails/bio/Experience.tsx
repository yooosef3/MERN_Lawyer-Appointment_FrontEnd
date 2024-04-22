import React from "react";
import TimeLine from "@/components/TimeLine";
import Title from "@/components/Title";

type ExperienceProps = {
  id?: number;
  title: string;
  time: string;
  info: string;
};
const Experience = ({ experiences }: { experiences: ExperienceProps[] }) => {
  return (
    <div>
      <Title smaller title="تجارب" />
      <ol className="relative border-s mt-5 border-gray-200 dark:border-gray-700">
        {experiences.map((experience) => (
          <TimeLine key={experience.id} {...experience} />
        ))}
      </ol>
    </div>
  );
};

export default Experience;
