"use client";

import { DatePicker, TimePicker } from "antd";
import { useBookNow, useCheck, useGetLawyerById } from "@/api/MyUserApi";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Loader from "@/components/Loader";
import moment from "moment";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const BookAppointment = () => {
  const { lawyerId }: any = useParams();
  const user = useSelector((state: any) => state.user);
  const router = useRouter();
  console.log(user);
  const [isAvailable, setIsAvailable] = useState();
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [time, setTime] = useState("00:00");
  const { mutate, data: lawyerData, isPending, isError } = useGetLawyerById();
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

  if (isError || bookingError || checkingError)
    toast.error("مشکلی رخ داده است!");
  if (isSuccess) {
    toast.success(bookInfo.data.message);
    router.push("/dashboard/user/appointments");
  }
  if (checkSuccess) toast.success(checkInfo.data.message);
  const date = moment(new Date(selectedDay)).locale("fa").format("YYYY-MM-DD");
  useEffect(() => {
    mutate(lawyerId);
  }, []);

  if (isPending || bookPending || checkPending) {
    return <Loader />;
  }
  const lawyer = lawyerData?.data?.data;

  const checkHandler = async () => {
    const data = {
      lawyerId,
      time,
      selectedDay,
    };
    check(data);
  };

  const bookHandler = async () => {
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
    <div>
      <h2>
        {lawyer?.firstName} {lawyer?.lastName}
      </h2>
      <DatePicker
        format="DD-MM-YYYY"
        onChange={(value: string) => {
          //@ts-ignore
          setSelectedDay(moment(value).format("DD-MM-YYYY"));
        }}
      />
      <TimePicker
        format="HH:mm"
        className="mt-3"
        //@ts-ignore
        onChange={(value: string) => {
          setTime(moment(value).format("HH:mm"));
        }}
      />
      <h1>{date}</h1>
      <h1>{time}</h1>
      <button onClick={checkHandler}>چک</button>
      <br />
      <br />
      <button onClick={bookHandler}>رزرو</button>
    </div>
  );
};

export default BookAppointment;
