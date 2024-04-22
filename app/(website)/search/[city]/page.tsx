"use client";

import Loader from "@/components/Loader";
import Search from "@/components/website/search/Search";
import { useParams } from "next/navigation";
import { useSearchLawyers } from "@/api/MyUserApi";
import { useState } from "react";

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState({
    searchQuery: "",
    page: 1,
    selectedSkills: [],
    sortOption: "expensive",
  });
  const { results, isLoading } = useSearchLawyers(searchState, city);
  if (isLoading) return <Loader />;
  console.log(results);
  const setSelectedSkills = (selectedSkills:any) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedSkills,
      page: 1,
    }));
  };
  console.log(searchState.selectedSkills);
  
  const setSearchQuery = (e: { target: { value: any; }; }) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: e.target.value,
      page: 1,
    }));
  };
  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };
  if (isLoading) return <Loader />;
  return (
    <Search
      searchResults={results}
      city={city} 
      setSearchQuery={setSearchQuery}
      resetSearch={resetSearch}
      searchState={searchState}
      setSearchState={setSearchState}
      setSelectedSkills={setSelectedSkills}
    />
  );
};

export default SearchPage;
