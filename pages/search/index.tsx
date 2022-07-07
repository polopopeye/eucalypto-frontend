import React from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';
import retrieveAllCompanies from 'src/app/backend/company/retrieveCompanies';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import SearcherPositions from 'src/components/SearcherPositions/SearcherPositions';

const index = () => {
  retrieveJobOffers({
    prop: 'published',
    value: true,
    reduxSpace: 'allJobOffers',
  });
  retrieveJobOffers({
    prop: 'published',
    value: true,
    reduxSpace: 'filteredJobOffers',
  });
  retrieveParentCategories((allParentCats: any) => {
    allParentCats.forEach((parentCat: any) => {
      retrieveCategories({
        propToFind: 'type',
        value: parentCat.name,
        saveIn: parentCat.name,
      });
    });
  });
  retrieveAllCompanies();

  return (
    <div className="pt-32">
      <SearcherPositions />
    </div>
  );
};

export default index;
