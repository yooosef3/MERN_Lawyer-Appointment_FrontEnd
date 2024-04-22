import { DatePicker, TimePicker } from "antd";

import { FaCircleInfo } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ReserveModalProps } from "@/app/types/types";
import moment from "moment";

const ReserveModal = ({
  lawyer,
  isModalOpen,
  setIsModalOpen,
  check,
  book,
  setSelectedDay,
  setTime,
  checkPending,
  bookPending ,
}:ReserveModalProps) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-full">
      <div
        onClick={handleCancel}
        className="absolute inset-0 bg-black/50 z-50"
      />
      <div className="flex-center absolute inset-5">
        <div className="space-y-3 mt-5 absolute bg-white p-5 rounded-md z-[60]">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-gray-800 font-semibold">رزرو نوبت</h2>
            <IoMdClose
              onClick={handleCancel}
              className="hover:text-red-600 cursor-pointer text-lg duration-200"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-green" />
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-gray-700">ساعات کاری:</h2>
              <time className="text-gray-600">
                {lawyer.timings[0]} - {lawyer.timings[1]}
              </time>{" "}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaCircleInfo className="text-green" />
            <h2 className="text-gray-500">
              ابتدا چک کنید که ساعت مورد نظرتان خالی باشد و سپس نسبت به رزرو
              نوبت اقدام کنید!
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <DatePicker
              format="DD-MM-YYYY"
              onChange={(value:string) => {
                setSelectedDay(moment(value).format("DD-MM-YYYY"));
              }}
            />
            <TimePicker
              format="HH:mm"
              className="mt-3"
              onChange={(value:any) => {
                setTime(moment(value).format("HH:mm"));
              }}
            />
          </div>
            <button
              onClick={check}
              className="bg-green hover:bg-lemon-100 duration-200 text-white rounded-md w-full text-lg py-1"
            >
              {checkPending ? " در حال چک" : "چک کردن زمان"}
            </button>
            <button
              onClick={book}
              className="bg-green hover:bg-lemon-100 duration-200 text-white rounded-md w-full text-lg py-1"
            >
              {bookPending ? "در حال رزرو" : "رزرو"}
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default ReserveModal;
