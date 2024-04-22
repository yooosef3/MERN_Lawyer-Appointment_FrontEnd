import OurExperience from "./OurExperience";
import Photo from "./Photo";

const Experience = () => {
  return (
    <div className="padding my-20 lg:grid grid-cols-[4fr_5fr] lg:h-[80vh]">
      <Photo />
      <OurExperience />
    </div>
  );
};

export default Experience;
