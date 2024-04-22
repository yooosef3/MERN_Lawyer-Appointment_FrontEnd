import Fact from "./Fact";
import books from "@/public/images/home-page/books.jpg.webp";
import { getStatics } from "@/lib/data";

const Facts = () => {
  const facts = getStatics();
  return (
    <div
      className="h-[600px] mt-20 lg:mt-0 md:h-[440px] lg:h-[350px] relative bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${books.src})` }}
    >
      <div className="relative w-full h-full inset-0 bg-black bg-opacity-65" />
      <div className="text-white padding items-center grid lg:grid-cols-[1fr_4fr] absolute inset-0">
        <div className="text-center space-y-3 flex lg:flex-col justify-center items-center gap-2">
          <h3 className="text-gray-300 text-sm lg:text-lg pt-4">بعضی</h3>
          <h2 className="text-2xl lg:text-3xl font-bold">حقایق</h2>
          <h2 className="text-2xl lg:text-3xl font-bold">جالب</h2>
        </div>
        <div className="grid gap-6 md:gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
          {facts.map((fact) => (
            <Fact key={fact.id} {...fact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
