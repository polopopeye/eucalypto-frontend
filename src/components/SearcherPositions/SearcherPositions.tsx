import React, { useState } from 'react';

// import CategoryBar from './modules/categoryBar';
import InputSearcher from './modules/InputSearcher';
import SearchDisplay from './modules/SearchDisplay';
import CategorySelector from './modules/CategorySelector';

const SearcherPositions = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <InputSearcher query={query} setQuery={setQuery} />
      <CategorySelector />
      <SearchDisplay />
    </>
  );
};

export default SearcherPositions;
