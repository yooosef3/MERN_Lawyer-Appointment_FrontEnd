import Image from "next/image";
import contact from "@/public/images/contact/contact.jpg";

const Photo = () => {
  return (
    <div className="h-full overflow-hidden hidden lg:block">
      <Image
        className="object-cover h-full"
        width={900}
        height={900}
        src={contact}
        alt="contact"
      />
    </div>
  );
};

export default Photo;
