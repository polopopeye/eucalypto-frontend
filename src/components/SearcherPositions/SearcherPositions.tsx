import React from "react";
import TextHeader from "../Utils/TextHeader/TextHeader";
import InputSearcher from "./modules/InputSearcher";
import SearchDisplay from "./modules/SearchDisplay";

const SearcherPositions = () => {
  return (
    <div>
      <div className="mt-2">
        <TextHeader title="Find you Job  "></TextHeader>
      </div>
      <div className="mt-4">
        <InputSearcher />
      </div>
      <SearchDisplay />
    </div>
  );
};

export default SearcherPositions;
