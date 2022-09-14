import { useState } from 'react';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import { useAppSelector } from 'src/app/hooks';

const CategorySelector = () => {
  const [submenuItems, setSubmenuItems] = useState([]);

  const { category } = useAppSelector((state) => state);

  const handleParentCat = (key) => {
    setSubmenuItems(category[key]);
  };

  const filterByCategory = (item) => {
    retrieveJobOffers({
      prop: 'categories',
      value: item.id,
      reduxSpace: 'filteredJobOffers',
    });
  };

  const handleReset = () => {
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
    setSubmenuItems([]);
  };

  return (
    <div>
      <div className="flex ml-2">
        <div
          className="p-4"
          onClick={() => {
            handleReset();
          }}
        >
          Reset View
        </div>
        {Object.keys(category).map((key) => (
          <div key={key} className="p-4" onClick={() => handleParentCat(key)}>
            {key}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-9">
        {submenuItems.map((item) => (
          <div
            key={item.id}
            className="p-4"
            onClick={() => filterByCategory(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
