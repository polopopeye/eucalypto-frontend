import React from 'react';
import TrendingCard from './TrendingCard';
import ViewAllBtn from './ViewAllBtn';

const FeaturedList = () => {
  return (
    <section aria-labelledby="trending-heading">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2
            id="trending-heading"
            className="text-base font-medium text-gray-900"
          >
            Trending
          </h2>
          <div className="mt-6 flow-root">
            <div className="-my-4 divide-y divide-gray-200">
              <TrendingCard
                src="/img/community/profile/1.png"
                body="Web Design Tutorials - What Is Search Engine Optimization?"
                visits={100}
              />
              <TrendingCard
                src="/img/community/profile/1.png"
                body="EU-Startups Summit"
                visits={100}
              />

              <TrendingCard
                src="/img/community/profile/1.png"
                body="Web Design Tutorials - What Is Search Engine Optimization?"
                visits={100}
              />
              <TrendingCard
                src="/img/community/profile/1.png"
                body="EU-Startups Summit"
                visits={100}
              />

              <TrendingCard
                src="/img/community/profile/1.png"
                body="Web Design Tutorials - What Is Search Engine Optimization?"
                visits={100}
              />
              <TrendingCard
                src="/img/community/profile/1.png"
                body="EU-Startups Summit"
                visits={100}
              />
            </div>
          </div>
          <ViewAllBtn />
        </div>
      </div>
    </section>
  );
};

export default FeaturedList;
