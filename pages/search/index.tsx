import React from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveAllCompanies from 'src/app/backend/company/retrieveCompanies';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import SearcherPositions from 'src/components/SearcherPositions/SearcherPositions';

const index = () => {
  retrieveJobOffers({
    prop: 'published',
    value: true,
    reduxSpace: 'allJobOffers',
  });
  retrieveCategories({
    propToFind: 'type',
    value: 'tech',
    saveIn: 'tech',
  });
  retrieveAllCompanies();

  return (
    <div className="pt-32">
      <SearcherPositions />
    </div>
  );
};

export default index;
