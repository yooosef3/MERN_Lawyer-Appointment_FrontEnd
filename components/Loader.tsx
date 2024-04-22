import Image from "next/image";
import spinner from "../public/images/loader/Blocks-1s-200px.gif";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex-center bg-black/60">
      <Image src={spinner} alt="loader" className="z-50" />
    </div>
  );
};

export default Loader;
