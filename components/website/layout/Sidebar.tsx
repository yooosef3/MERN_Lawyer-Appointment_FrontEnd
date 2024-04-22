import { FaHome, FaUserGraduate } from "react-icons/fa";

import { HiMiniUser } from "react-icons/hi2";
import { HiTemplate } from "react-icons/hi";
import Image from "next/image";
import { MdArticle } from "react-icons/md";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import logo from "@/public/images/Law-logo-design-template-on-transparent-background-PNG.png";
import { useRouter } from "next/navigation";

const items = [
  { id: 1, label: "خانه", route: "/", icon: <FaHome /> },
  { id: 2, label: "درباره", route: "/about", icon: <MdArticle /> },
  { id: 3, label: "وکلا", route: "/lawyers", icon: <FaUserGraduate /> },
  { id: 4, label: "موارد تحت پوشش", route: "/coverage", icon: <HiTemplate /> },
  { id: 5, label: "بلاگ", route: "/blogs", icon: <MdArticle /> },
  {
    id: 6,
    label: "تماس با ما",
    route: "/contact",
    icon: <PiPhoneDisconnectFill />,
  },
];
const Sidebar = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const router = useRouter();
  return (
    <div
      className={`w-[300px] z-50 fixed bg-black/90 backdrop-blur top-0 ${
        open ? "right-0" : "-right-[300px]"
      } duration-300 h-full lg:hidden`}
    >
      <div className="flex-center p-5 border-b border-gray-800">
        <Image
          className="w-20"
          alt="logo"
          src={logo}
          width={500}
          height={500}
        />
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            router.push(item.route);
            setOpen(false);
          }}
          className="flex group items-center gap-3 text-xl hover:bg-[#a09a2b] duration-200 cursor-pointer text-white p-4 border-b border-gray-800"
        >
          <span className="text-[#a09a2b] group-hover:text-[#47440d] duration-200 text-2xl">
            {item.icon}
          </span>
          <h2>{item.label}</h2>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
