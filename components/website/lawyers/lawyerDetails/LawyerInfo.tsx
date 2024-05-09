"use client";

import { FaComment, FaMoneyBillAlt } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { useBookNow, useCheck, useGetLawyerById } from "@/api/MyUserApi";
import { useParams, useRouter } from "next/navigation";

import { AiFillLike } from "react-icons/ai";
import { FaMobileRetro } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import Image from "next/image";
import { LawyerInfoContext } from "./LawyerDetails";
import { LawyerProps } from "@/app/types/types";
import ReserveModal from "./ReserveModal";
import Tags from "@/components/Tags";
import Text from "@/components/Text";
import TextAndIcon from "@/components/TextAndIcon";
import { TiLocation } from "react-icons/ti";
import Title from "@/components/Title";
import lawyer_profile from "@/public/images/lawyers/lawyer.jpg";
import moment from "moment";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const LawyerInfo = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lawyer:LawyerProps = useContext(LawyerInfoContext)!!;
  const { lawyerId }: any = useParams();
  const user = useSelector((state: any) => state?.user);
  const [selectedDay, setSelectedDay] = useState<any>();
  const [time, setTime] = useState("15:30");
  const showModal = () => {
    setIsModalOpen(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else if (!isModalOpen) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  const {
    mutate: bookNow,
    data: bookInfo,
    isPending: bookPending,
    isError: bookingError,
    isSuccess,
  } = useBookNow();

  const {
    mutate: check,
    data: checkInfo,
    isPending: checkPending,
    isError: checkingError,
    isSuccess: checkSuccess,
  } = useCheck();

  if (bookingError || checkingError) toast.error("مشکلی رخ داده است!");
  if (checkSuccess) toast.success(checkInfo.data.message);
  if (isSuccess) {
    toast.success(bookInfo.data.message);
    setTimeout(() => {
      toast.success("در حال انتقال به صفحه لیست نوبت ها");
      router.push(bookInfo?.data?.onClickPath);
    }, 500);
  }
  const date = moment(new Date(selectedDay)).locale("fa").format("YYYY-MM-DD");

  const checkHandler = async () => {
    const data = {
      lawyerId,
      time,
      selectedDay,
    };
    check(data);
  };

  const bookHandler = async () => {
    if (!user) {
      toast.error("برای رزرو ابتدا باید وارد شوید!");
      router.push("/login");
    }
    const data = {
      lawyerId,
      userId: user._id,
      lawyerInfo: lawyer,
      userInfo: user,
      time,
      selectedDay,
    };
    bookNow(data);
  };
  return (
    <>
      <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-[3fr_1fr] rounded-md p-5 shadow-md bg-white border">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <Image
            className="w-52 h-52 object-cover rounded-md"
            width={300}
            height={300}
            src={lawyer?.profile || lawyer_profile}
            alt="lawyer"
          />
          <div>
            <div className="mb-4">
              <Title
                smaller
                title={`${lawyer?.firstName} ${lawyer?.lastName}`}
              />
              <Text text={lawyer?.specialization} />
            </div>
            <div className="flex items-center gap-2">
              <GoLaw className="text-green" />
              <h2 className="text-neutral-700">وکیل پایه یک دادگستری</h2>
            </div>
            <div className="flex items-center gap-2 my-1">
              <TiLocation className="text-green" />
              <span className="text-neutral-700">{lawyer?.address}</span>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <FaMobileRetro className="text-green" />
              <span className="text-neutral-700">{lawyer?.phoneNumber}</span>
            </div>
            <Tags tags={lawyer?.skills} />
          </div>
        </div>
        <div className="space-y-[22px]">
          <TextAndIcon
            className="text-neutral-500"
            text="99%"
            icon={<AiFillLike />}
          />
          <TextAndIcon
            className="text-neutral-500"
            text="35 نظر"
            icon={<FaComment />}
          />
          <TextAndIcon
            className="text-neutral-500"
            text={`${lawyer?.feePerConsultation?.toLocaleString()} تومان در ساعت`}
            icon={<FaMoneyBillAlt />}
          />
          <button
            onClick={showModal}
            className="bg-green hover:bg-lemon-100 duration-200 text-white rounded-md w-full text-lg py-1"
          >
            رزرو
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ReserveModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          check={checkHandler}
          book={bookHandler}
          setSelectedDay={setSelectedDay}
          setTime={setTime}
          lawyer={lawyer}
          checkPending={checkPending}
          bookPending={bookPending}
        />
      )}
    </>
  );
};

export default LawyerInfo;
