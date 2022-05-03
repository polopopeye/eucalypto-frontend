import React from "react";

import CategoryBar from "./modules/categoryBar";
import InputSearcher from "./modules/inputSearcher";
import SearchDisplay from "./modules/searchDisplay";

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
