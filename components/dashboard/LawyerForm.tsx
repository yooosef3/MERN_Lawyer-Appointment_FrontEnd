import { Col, Form, Input, Row, TimePicker } from "antd";

import { BsFillCloudUploadFill } from "react-icons/bs";
import Image from "next/image";
import { LawyerFormProps } from "@/app/types/types";
import Skills from "./main/user/Skills";
import Title from "../Title";
import avatar from "@/public/images/lawyers/Netflix-avatar.png";
import { getSkills } from "@/lib/data";
import moment from "moment";
import profile from "@/public/images/lawyers/lawyer.jpg";

const LawyerForm = ({
  onFinish,
  initialValues,
  setSelectedSkills,
  selectedSkills,
}: LawyerFormProps) => {
  const skills = getSkills();
  const handleCheckboxChange = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSkills([...selectedSkills, value]);
    } else {
      setSelectedSkills(
        selectedSkills.filter((skill: string) => skill !== value)
      );
    }
  };
  return (
    <div className="h-[639px] rounded-md p-5">
      <Title
        smaller
        title={initialValues?.status === "approved" ? "پروفایل" : "وکیل شو"}
        className="mb-10"
      />
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          ...initialValues,
          ...(initialValues && {
            timings: [
              moment(initialValues?.timings[0], "HH:mm"),
              moment(initialValues?.timings[1], "HH:mm"),
            ],
          }),
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
          <Image
            className="w-24 lg:w-32 h-24 lg:h-32 rounded-full shadow-md"
            src={initialValues?.status === "approved" ? profile : avatar}
            width={600}
            height={600}
            alt="profile"
          />
          <div>
            <div className="rounded-md relative p-2 bg-[#aeb4b5] hover:bg-[#8d8e8e] duration-200 w-28 lg:w-40 mx-auto lg:mx-0 flex justify-center">
              <input
                className="opacity-0 absolute inset-0 cursor-pointer"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => (e.target.files ? e.target.files[0] : null)}
              />
              <BsFillCloudUploadFill className="text-white text-2xl" />
            </div>
            <p className="text-gray-500 hidden lg:block text-center lg:text-right font-semibold mt-5">
              JPG، JPEG یا PNG مجاز است. حداکثر حجم 3 مگابایت
            </p>
          </div>
        </div>
        <div className="max-h-[22vh] lg:max-h-[40vh] p-5 overflow-y-auto">
          <h1 className="my-5 text-lg font-semibold">اطلاعات شخصی</h1>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="نام"
                name="firstName"
                rules={[
                  { required: true, message: "وارد کردن نام ضروری است!" },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="نام"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="نام خانوادگی"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "وارد کردن نام خانوادگی ضروری است!",
                  },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="نام خانوادگی"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="تلفن"
                name="phoneNumber"
                rules={[
                  { required: true, message: "وارد کردن تلفن ضروری است!" },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="09"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="سایت"
                name="website"
                rules={[
                  { required: true, message: "وارد کردن سایت ضروری است!" },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="سایت"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="آدرس"
                name="address"
                rules={[
                  { required: true, message: "وارد کردن آدرس ضروری است!" },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="آدرس"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="شهر"
                name="city"
                rules={[
                  { required: true, message: "وارد کردن شهر ضروری است!" },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="شهر"
                />
              </Form.Item>
            </Col>
          </Row>
          <hr />
          <h1 className="my-5 text-lg font-semibold">اطلاعات تخصصی</h1>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="تخصص"
                name="specialization"
                rules={[
                  { required: true, message: "وارد کردن تخصص ضروری است!" },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="تخصص"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="تجربه کاری (سال)"
                name="experience"
                rules={[
                  {
                    required: true,
                    message: "وارد کردن تجربه کاری ضروری است!",
                  },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="تجربه کاری"
                  type="number"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="حق مشاوره (تومان)"
                name="feePerConsultation"
                rules={[
                  { required: true, message: "وارد کردن حق مشاوره ضروری است!" },
                ]}
              >
                <Input
                  className="h-9 lg:h-12 rounded-md border border-gray-400 outline-none bg-slate-50"
                  placeholder="حق مشاوره (تومان)"
                  type="number"
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item
                required
                label="ساعات کاری"
                name="timings"
                rules={[
                  {
                    required: true,
                    message: "وارد کردن ساعات کاری ضروری است!",
                  },
                ]}
              >
                <TimePicker.RangePicker format="HH:mm" separator={null} />
              </Form.Item>
            </Col>
          </Row>
          {!initialValues && (
            <Skills
              skills={skills}
              selectedSkills={selectedSkills}
              onchange={handleCheckboxChange}
            />
          )}
        </div>
        <button
          type="submit"
          className="mt-20 lg:mt-5 py-2 px-7 rounded-md bg-[#1B5A90] text-white hover:bg-[#10afc7] duration-200"
        >
          {initialValues?.status === "approved" ? "ذخیره" : "اعمال"}
        </button>
      </Form>
    </div>
  );
};

export default LawyerForm;
