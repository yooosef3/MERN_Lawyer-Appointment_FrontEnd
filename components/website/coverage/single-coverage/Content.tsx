import Image from "next/image";
import Text from "@/components/Text";
import Title from "@/components/Title";
import coverage from "@/public/images/coverage/coverage-1.jpg.webp";

const Content = () => {
  const text =
    "خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ. خیلی دور، پشت کلمه کوه ها، دور از کشورهای ایران و غنا متون کور زندگی می کنند. آنها جدا از هم در وسیع درست در ساحل زیبا زندگی می کنند، یک اقیانوس زبان بزرگ.";
  return (
    <div>
      <div className="h-[500px] w-full overflow-hidden">
        <Image
          className="w-full h-full"
          width={600}
          height={600}
          src={coverage}
          alt="coverage"
        />
      </div>
      <div>
        <Title title="مرور" className="my-5" />
        <Text text={text} className="mb-10" />
        <Text text={text} />
      </div>
      <div className="mt-10">
        <Title className="mb-5" title="چطور میتوانیم کمک کنیم !" />
        <Text text={text} />
      </div>
    </div>
  );
};

export default Content;
