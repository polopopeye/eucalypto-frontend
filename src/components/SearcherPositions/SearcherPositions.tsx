import React from "react";

import CategoryBar from "./modules/categoryBar";
import InputSearcher from "./modules/InputSearcher";
import SearchDisplay from "./modules/SearchDisplay";

const SearcherPositions = () => {
  return (
    <>
      <CategoryBar />
      <InputSearcher />

      <SearchDisplay />
    </>
  );
};

export default SearcherPositions;
