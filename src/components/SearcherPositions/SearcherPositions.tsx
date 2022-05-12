import React, { useState } from 'react';

import CategoryBar from './modules/categoryBar';
import InputSearcher from './modules/InputSearcher';
import SearchDisplay from './modules/SearchDisplay';

const SearcherPositions = () => {
  const [query, setQuery] = useState('');
  return (
    <>
      <CategoryBar setQuery={setQuery} />
      <InputSearcher query={query} setQuery={setQuery} />

      <SearchDisplay />
    </>
  );
};

export default SearcherPositions;
