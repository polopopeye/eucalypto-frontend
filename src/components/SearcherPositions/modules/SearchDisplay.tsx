import React, { useEffect, useRef, useState } from "react";

import CompanyBubble from "./CompanyBubble";
import companyData from "./data";

// @ts-ignore
import BubbleUI from "react-bubble-ui";
// react-bubble-ui https://github.com/blakesanie/React-Bubble-UI

import "react-bubble-ui/dist/index.css";
import ModalContainer from "./ModalContainer";

const SearchDisplay = () => {
  const getStockBubbles = () => {
    return companyData.slice(0, 20).map((company, i) => {
      return <CompanyBubble bubbleSize={0} {...company} key={i} />;
    });
  };
  const stockBubbles = getStockBubbles();

  const [isBrowser, setIsBrowser] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [windowOrientation, setWindowOrientation] = useState(0);
  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
    setInnerWidth(typeof window !== undefined ? window.innerWidth : 0);
    setInnerHeight(typeof window !== undefined ? window.innerHeight : 0);
    setWindowOrientation(
      typeof window !== undefined ? window.screen.orientation.angle : 0
    );
  }, []);

  return (
    <div>
      {isBrowser && (
        <BubbleUI
          style={{
            height: innerHeight - 150 + "px",
          }}
          options={{
            size: innerWidth / 6,
            minSize: 100,
            gutter: 20,
            provideProps: true,
            numCols: 4,
            fringeWidth:
              windowOrientation === 0 ? innerHeight / 6 : innerWidth / 6,
            yRadius: innerHeight / 5,
            xRadius: innerWidth / 3,
            cornerRadius: 50,
            showGuides: false,
            compact: false,
            gravitation: 5,
          }}
        >
          {stockBubbles}
        </BubbleUI>
      )}
      <ModalContainer />
    </div>
  );
};

export default SearchDisplay;
