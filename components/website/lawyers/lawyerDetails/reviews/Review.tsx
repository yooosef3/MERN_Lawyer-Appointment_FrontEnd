import { AiFillLike } from "react-icons/ai";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Text from "@/components/Text";
import Title from "@/components/Title";
import review from "@/public/images/lawyers/costumer.jpg";

const Review = () => {
  return (
    <div className="py-7 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="w-11 h-11 rounded-full"
            src={review}
            alt="review"
            width={400}
            height={400}
          />
          <div>
            <Title smaller title="یوسف خدری" />
            <Text text="2 روز پیش" className="text-sm" />
          </div>
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4].map((star) => (
            <IoIosStar className="text-yellow-400" key={star} />
          ))}
          <IoIosStar className="text-gray-400" />
        </div>
      </div>
      <div className="mt-6 mr-12">
        <div className="flex items-center mb-5 text-green-500 gap-1">
          <AiFillLike />
          <p>این وکیل را پیشنهاد میکنم!</p>
        </div>
        <Text text="وکیل پایه یک دادگستری در اصفهان عضو اتحادیه سراسری کانون های وکلای دادگستری ایران (اسکودا) آماده پذیرش انواع دعاوی حقوقی | دعاوی خانواده | دعاوی ثبتی | دعاوی کیفری میباشد. جهت رزرو نوبت مشاوره از طریق شماره های درج شده در سایت نسبت به اخذ نوبت حضوری یا غیر حضوری (تلفنی) اقدام فرمایید" />
      </div>
    </div>
  );
};

export default Review;
