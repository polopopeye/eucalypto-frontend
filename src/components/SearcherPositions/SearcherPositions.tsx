import React from "react";
import TextHeader from "../Utils/TextHeader/TextHeader";
import InputSearcher from "./modules/InputSearcher";
import SearchDisplay from "./modules/SearchDisplay";

const SearcherPositions = () => {
  return (
    <>
      <InputSearcher />
      <SearchDisplay />
    </>
  );
};

export default SearcherPositions;
