"use client";

import { FiSearch } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { SearchBarProps } from "@/app/types/types";
import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

const SearchBar = ({
  placeholder,
  onSubmit,
  searched,
  setSearched,
  onReset,
  onLandingReset,
  searchState,
  setSearchQuery,
  search,
}: SearchBarProps) => {
  useGSAP(() => {
    gsap.to("#search", { opacity: 1, x: 0, delay: 1 });
  }, []);

  const path = usePathname();

  const handleReset = () => {
    if (search) {
      searchState.searchQuery = "";
      onReset();
    } else {
      onLandingReset();
    }
  };
  return (
    <div
      id="search"
      className={`rounded-md ${
        !path.startsWith("/search") &&
        "opacity-0 -translate-x-20 bg-[#39543892] backdrop-blur-md mb-14 lg:mb-0 p-5 "
      } shadow-sm`}
    >
      {!path.startsWith("/search") && (
        <div className="text-lg flex items-center text-white mb-5 gap-1">
          <MdLocationPin />
          <h3>نام شهر را وارد کنید</h3>
        </div>
      )}
      <form
        onSubmit={onSubmit}
        className={`rounded-md grid grid-cols-[1fr_1fr_9fr] w-full  ${
          !path.startsWith("/search") ? "lg:max-w-2xl xl:max-w-3xl" : "mb-10"
        } h-14 items-center py-2 px-2 overflow-hidden border shadow-sm hover:shadow-lg bg-white duration-300`}
      >
        <FiSearch
          className="mx-auto text-gray-700 hover:text-blue cursor-pointer duration-200"
          onClick={onSubmit}
        />
        <div
          onClick={handleReset}
          className="rounded-md border w-fit flex items-center text-sm cursor-pointer hover:text-red-600 duration-200 text-neutral-500 px-1"
        >
          <IoIosClose />
          <span>حذف</span>
        </div>
        <input
          value={search ? searchState?.searchQuery : searched}
          className="w-full placeholder:text-xs md:placeholder:text-base h-full outline-none text-neutral-800 mr-2"
          onChange={(e) =>
            search
              ? setSearchQuery({ ...searchState, searchQuery: e.target.value })
              : setSearched(e.target.value)
          }
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default SearchBar;
