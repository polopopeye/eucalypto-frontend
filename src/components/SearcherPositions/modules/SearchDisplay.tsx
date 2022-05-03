import React, { useEffect, useState } from "react";

import CompanyBubble from "./companyBubble";

// @ts-ignore
import BubbleUI from "react-bubble-ui";
// react-bubble-ui https://github.com/blakesanie/React-Bubble-UI

import "react-bubble-ui/dist/index.css";
import ModalContainer from "./ModalContainer";
import { store } from "../../../app/store";
import retrieveJobOffers from "../../../app/backend/retrievesJobOffer";
import { JobOfferInterface } from "../../../commons/jobOfferInterface";
import retrieveCategories from "../../../app/backend/retrieveCategories";

const SearchDisplay = () => {
  const [jobOffers, setJobOffers] = useState(
    store.getState().jobs.allJobOffers || []
  );
  store.subscribe(() => {
    setJobOffers(store.getState().jobs.filteredJobOffers);
  });
  useEffect(() => {
    retrieveJobOffers({
      propOrId: "published",
      value: true,
      reduxSpace: "allJobOffers",
    });

    retrieveCategories({
      propToFind: "type",
      value: "tech",
      saveIn: "tech",
    });
  }, []);

  const [isBrowser, setIsBrowser] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [windowOrientation, setWindowOrientation] = useState(0);

  const [widthContainer, setWidthContainer] = useState(0);

  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
    setInnerWidth(typeof window !== undefined ? window.innerWidth : 0);
    setInnerHeight(typeof window !== undefined ? window.innerHeight : 0);
    setWindowOrientation(
      typeof window !== undefined ? window.screen.orientation.angle : 0
    );
    setWidthContainer(
      window.innerWidth > 1024 ? 1024 / 4.5 : window.innerWidth / 5.5
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
            size: widthContainer,
            minSize: 100,
            gutter: 20,
            provideProps: true,
            numCols: 4,
            fringeWidth:
              windowOrientation === 0 ? innerHeight / 6 : widthContainer,
            yRadius: innerHeight / 5,
            xRadius: widthContainer * 2,
            cornerRadius: 50,
            showGuides: false,
            compact: false,
            gravitation: 5,
          }}
        >
          {jobOffers &&
            jobOffers.map((jobOffer: JobOfferInterface, i) => (
              <CompanyBubble jobOffer={jobOffer} key={i} />
            ))}
        </BubbleUI>
      )}
      <ModalContainer />
    </div>
  );
};

export default SearchDisplay;
