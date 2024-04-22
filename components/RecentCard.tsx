import { BiSolidCommentDetail } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { RecentCardProps } from "@/app/types/types";
import { RiUser3Fill } from "react-icons/ri";
import Title from "./Title";

const RecentCard = ({ summary, image, time, comments }: RecentCardProps) => {
  return (
    <div className="grid grid-cols-[2fr_1fr] lg:grid-cols-1 xl:grid-cols-[2fr_1fr] h-fit gap-5">
      <div className="flex flex-col justify-between">
        <Title
          title={summary}
          smaller
          className="text-[15px] hover:text-lemon-300 duration-200 cursor-pointer"
        />
        <div className="flex items-center gap-3 text-sm mt-2">
          <div className="text-gray-400 flex items-center gap-1">
            <FaCalendarAlt />
            <p>{time}</p>
          </div>
          <div className="text-gray-400 flex items-center gap-1">
            <RiUser3Fill />
            <p>ادمین</p>
          </div>
          <div className="text-gray-400 flex items-center gap-1">
            <BiSolidCommentDetail />
            <p>{comments.length}</p>
          </div>
        </div>
      </div>
      <Image
        className="w-full h-40 xl:h-24 object-cover"
        width={600}
        height={600}
        alt={summary}
        src={image}
      />
    </div>
  );
};

export default RecentCard;
