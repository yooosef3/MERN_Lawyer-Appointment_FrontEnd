import { FiSearch } from "react-icons/fi";
import LawyerCard from "./LawyerCard";
import { ResultsProps } from "@/app/types/types";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";

const Results = ({ results, city, setSortOption }: ResultsProps) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <FiSearch size={24} className="text-blue-600" />
            <Title
              className="text-sm md:text-base"
              smaller
              title={`${results?.length} نتیجه برای شهر ${decodeURIComponent(
                city
              )} یافت شد!`}
            />
          </div>
          <span
            onClick={() => router.push("/")}
            className="text-blue-500 hover:text-blue-600 duration-200 text-sm font-semibold cursor-pointer"
          >
            تغییر شهر
          </span>
        </div>
        <div className="w-fit flex flex-col gap-2 items-center xl:flex-row">
          <label className="font-semibold text-gray-500" htmlFor="sort">
            دسته بندی براساس:
          </label>
          <select
            defaultValue="all"
            name="sort"
            id="sort"
            className="bg-white text-neutral-700 font-bold pr-auto mr-2 pr-4 outline-none focus:shadow-md w-[200px] text-center rounded-lg"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="all">همه</option>
            <option value="cheap">کم ترین حق مشاوره</option>
            <option value="expensive">بیشترین حق مشاوره</option>
          </select>
        </div>
      </div>
      <div className="space-y-5 mt-10">
        {results?.map((lawyer) => (
          <LawyerCard key={lawyer._id} {...lawyer} />
        ))}
      </div>
    </div>
  );
};

export default Results;
