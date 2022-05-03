import React, { useEffect } from "react";
import Stars from "../../Home/Reviews/modules/Stars";
import ReactTooltip from "react-tooltip";
import ModalContainer from "./ModalContainer";
import { store } from "../../../app/store";
import jobModalSlice from "../../../app/slices/modals/jobModalSlice";
import Badges from "../../Utils/categories/badges";
import { JobOfferInterface } from "../../../commons/jobOfferInterface";
import retrieveCategories from "../../../app/backend/retrieveCategories";

export default function CompanyBubble(prop: { jobOffer: JobOfferInterface }) {
  const { jobOffer } = prop;
  console.log(
    "🚀 ~ file: CompanyBubble.tsx ~ line 12 ~ CompanyBubble ~ jobOffer",
    jobOffer
  );
  const bubbleSize = 0;
  const textColor = "red";
  return (
    <div
      style={{
        backgroundColor: "black",
        cursor: "pointer",
      }}
      className={"companyBubble"}
      onClick={() => {
        store.dispatch(
          jobModalSlice.actions.setData({ isOpen: true, data: jobOffer })
        );
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          height: "100%",
          flexDirection: "column",
          transition: "opacity 0.1s ease",
        }}
      >
        <p
          style={{
            color: textColor,
            fontSize: 14,
            marginBottom: 6,
            fontWeight: 1000,
            maxWidth: 150,
            textAlign: "center",
          }}
        >
          {jobOffer.name}
        </p>
        <p
          style={{
            color: textColor,
            fontSize: 14,

            textAlign: "center",
          }}
        >
          {jobOffer.salary}
        </p>

        <p
          style={{
            color: textColor,
            fontSize: 11,
            textAlign: "center",
          }}
        >
          <Badges categoriesId={jobOffer.categories as Array<string>} />
        </p>
      </div>
    </div>
  );
}
