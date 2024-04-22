import Content from "./Content";
import SideBar from "./SideBar";

const SingleCoverage = () => {
  return (
    <div className="padding py-44 gap-16 grid lg:grid-cols-[1fr_3fr]">
      <SideBar />
      <Content />
    </div>
  );
};

export default SingleCoverage;
