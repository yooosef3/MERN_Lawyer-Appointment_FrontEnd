"use client";

import { LawyerProps, SearchProps } from "@/app/types/types";
import React, { useState } from "react";

import Filters from "./Filters";
import Pagination from "./Pagination";
import Results from "./Results";
import SearchBar from "../SearchBar";

const Search = ({
  searchResults,
  city,
  setSearchQuery,
  resetSearch,
  searchState,
  setSearchState,
  setSelectedSkills,
}: SearchProps) => {
  const [sortOption, setSortOption] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [lawyersPerPage, setLawyersPerPage] = useState(4);
  const nameResult = searchResults?.data?.data.filter((lawyer: LawyerProps) =>
    lawyer?.lastName?.includes(searchState.searchQuery)
  );

  let skillLawyers = nameResult;
  const selectedSkills: any = searchState?.selectedSkills;
  if (selectedSkills && selectedSkills?.length > 0) {
    skillLawyers = nameResult.filter((item: LawyerProps) =>
      selectedSkills.some((skill: { label: string; slug: string }) =>
        item.skills.includes(skill.slug)
      )
    );
  }
  let sortedLawyers = skillLawyers;
  if (sortOption === "expensive") {
    sortedLawyers = skillLawyers.sort(
      (a: { feePerConsultation: number }, b: { feePerConsultation: number }) =>
        b.feePerConsultation - a.feePerConsultation
    );
  } else if (sortOption === "cheap") {
    sortedLawyers = skillLawyers.sort(
      (a: { feePerConsultation: number }, b: { feePerConsultation: number }) =>
        a.feePerConsultation - b.feePerConsultation
    );
  }

  const indexOfLastLawyer = currentPage * lawyersPerPage;
  const indexOfFirstLawyer = indexOfLastLawyer - lawyersPerPage;
  const currentLawyers = sortedLawyers?.slice(
    indexOfFirstLawyer,
    indexOfLastLawyer
  );
  const totalPages = Math.ceil(sortedLawyers?.length / lawyersPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-44 gap-10 padding lg:grid grid-cols-[3fr_1fr]">
      <div>
        <SearchBar
          searchState={searchState}
          setSearchQuery={setSearchState}
          onSubmit={setSearchQuery}
          placeholder="جستجو براساس نام وکیل"
          onReset={resetSearch}
          search
        />
        <Results
          results={currentLawyers}
          city={city}
          setSortOption={setSortOption}
        />
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          totalPages={totalPages}
        />
      </div>
      <Filters
        onChange={setSelectedSkills}
        selectedSkills={searchState?.selectedSkills}
      />
    </div>
  );
};

export default Search;
