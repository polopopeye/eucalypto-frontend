import React from "react";
import FooterCard from "./FooterCard";
import HeaderCard from "./HeaderCard";

const ArticleCard = () => {
  return (
    <div className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
      <HeaderCard />
      <div>
        <div className="flex">
          <div className="mr-4 flex-shrink-0 self-center">
            <img src="https://media.taringa.net/knn/crop:150x115/Z3M6Ly9rbjMvNDhjNmJkN2NjNDQ1OTYzYmY1MGFiODQwYTNiZjNiNjEuanBn" />
          </div>
          <div className="mt-8">
            <h4 className="text-2xl font-bold mt-1">
              Web Design Tutorials - What Is Search Engine Optimization?
            </h4>
            <p className="mt-4">
              Communities: <b>Marketing</b>, <b>SEO</b>, <b>Web Design</b>
            </p>
            <br></br>
            <br></br>
            <div className="w-full mx-auto text-center">
              <button
                type="button"
                className="mx-auto text-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterCard type="Article" />
    </div>
  );
};

export default ArticleCard;
