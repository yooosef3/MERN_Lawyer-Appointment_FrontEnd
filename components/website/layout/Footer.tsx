import {
  FaAngleLeft,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import Text from "@/components/Text";
import { getAreas } from "@/lib/data";
import logo from "../../../public/images/Law-logo-design-template-on-transparent-background-PNG.png";

const Footer = () => {
  const areas = getAreas();
  const socials = [
    { id: 1, icon: <FaLinkedinIn /> },
    { id: 2, icon: <FaInstagram /> },
    { id: 3, icon: <FaTelegramPlane /> },
  ];
  const info = [
    {
      id: 1,
      text: "تهران, جردن, خیابان سلطانی برج پارس طبقه بیستم",
      icon: <FaLocationDot />,
    },
    { id: 2, text: "yooosef.khedri@gmail.com", icon: <IoMail /> },
    { id: 3, text: "09149689984", icon: <FaPhoneFlip /> },
  ];
  return (
    <div className="padding !py-16 bg-[#222831]">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_1fr]">
        <div>
          <Image alt="logo" src={logo} width={120} height={120} />
          <Text
            className="text-gray-100 mt-6 leading-8"
            text="رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین می کند. این کشور بهشتی است که در آن قسمت های برشته جملات به سمت شما پرواز می کند."
          />
          <div className="flex items-center gap-6 mt-12">
            {socials.map((social) => (
              <div
                key={social.id}
                className="flex bg-[#2D333C] text-white items-center text-xl hover:bg-lemon cursor-pointer duration-200 justify-center w-12 h-12 rounded-full"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:mt-24">
          <h2 className="text-white font-semibold mb-6 text-lg">
            موارد تحت پوشش
          </h2>
          {areas.map((area) => (
            <div className="flex items-center gap-1 text-gray-200 cursor-pointer duration-200 hover:text-gray-300 mb-2">
              <FaAngleLeft className="text-lemon" />
              <h3>{area.label}</h3>
            </div>
          ))}
        </div>
        <div className="lg:mt-24">
          <h2 className="text-white font-semibold mb-6 text-lg">سوال داری؟</h2>
          {info.map((item) => (
            <div key={item.id} className="flex mb-3 items-center gap-2">
              <div className="text-lemon text-lg">{item.icon}</div>
              <a
                href={
                  item.id === 2
                    ? `mailto:${item.text}`
                    : item.id === 3 && `tel:${item.text}` || ''
                }
                className="text-gray-200 hover:text-gray-300 duration-200 cursor-pointer"
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
        <div className="lg:mt-24">
          <h2 className="text-white font-semibold mb-6 text-lg">ساعات کاری</h2>
          <div className="mb-4">
            <h2 className="font-medium mb-2 text-lemon">روزهای کاری:</h2>
            <p className="text-white">شنبه تا چهارشنبه: از 9 صبح تا 9 شب</p>
            <p className="text-white"> پنجشنبه: از 9 صبح تا 2بعدازظهر</p>
          </div>
          <div>
            <h2 className="font-medium mb-2 text-lemon">روزهای تعطیل:</h2>
            <p className="!text-white">جمعه ها</p>
            <p className="!text-white">تعطیلات رسمی</p>
          </div>
        </div>
      </div>
      <p className="text-gray-300 font-medium text-center mt-8">
        {" "}
        © 2024 کلیه حقوق محفوظ است | این قالب توسط{" "}
        <strong className="mx-1 text-lemon">یوسف خدری</strong> ساخته شده است
      </p>
    </div>
  );
};

export default Footer;
