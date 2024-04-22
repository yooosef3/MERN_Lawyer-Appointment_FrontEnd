import { CommentCardProps } from "@/app/types/types";
import Image from "next/image";
import Text from "@/components/Text";

const CommentCard = ({ name, text, image, time }:CommentCardProps) => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <Image
          className="w-16 h-16 rounded-full shadow-md"
          src={image}
          alt={name}
          width={200}
          height={200}
        />
        <div>
          <h2 className="text-lg">{name}</h2>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>
      <Text text={text} className='pr-20'/>
    </div>
  );
};

export default CommentCard;
