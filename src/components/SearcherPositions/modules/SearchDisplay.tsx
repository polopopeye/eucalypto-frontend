import React, { useEffect, useState } from "react";

import CompanyBubble from "./CompanyBubble";
import companyData from "./data";

import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import ModalContainer from "./ModalContainer";

const SearchDisplay = () => {
  const getStockBubbles = () => {
    return companyData.slice(0, 20).map((company, i) => {
      return <CompanyBubble {...company} key={i} />;
    });
  };
  const stockBubbles = getStockBubbles();

  const [isBrowser, setIsBrowser] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
    setInnerWidth(typeof window !== undefined ? window.innerWidth : 0);
    setInnerHeight(typeof window !== undefined ? window.innerHeight : 0);
  }, []);

  return (
    <div>
      {isBrowser && (
        <BubbleUI
          options={{
            size: innerWidth / 6,
            minSize: 100,
            gutter: 20,
            provideProps: true,
            numCols: 4,
            fringeWidth: innerHeight / 7,
            yRadius: innerHeight / 7,
            xRadius: innerWidth / 3,
            cornerRadius: 50,
            showGuides: false,
            compact: true,
            gravitation: 5,
          }}
          className={"myBubbleUI"}
        >
          {stockBubbles}
        </BubbleUI>
      )}
      <ModalContainer />
    </div>
  );
};

export default SearchDisplay;
