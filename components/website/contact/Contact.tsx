import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";

import ContactForm from "./ContactForm";
import Info from "./Info";
import { IoMail } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import Title from "@/components/Title";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      title: "آدرس",
      info: "تهران, جردن, خیابان سلطانی برج پارس طبقه بیستم",
      icon: <FaLocationDot />,
    },
    { id: 2, title: "تلفن", info: "09226308183", icon: <FaPhoneFlip /> },
    {
      id: 3,
      title: "ایمیل",
      info: "yooosef.khedri@gmail.com",
      icon: <IoMail />,
    },
    { id: 4, title: "سایت", info: "wwww.google.com", icon: <TbWorldWww /> },
  ];
  return (
    <div className="padding py-40 bg-slate-50">
      <div>
        <Title title="اطلاعات تماس" />
        <Info contacts={contacts} />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
