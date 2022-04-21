import React from "react";
import Stars from "../../Home/Reviews/modules/Stars";
import ReactTooltip from "react-tooltip";
import ModalContainer from "./ModalContainer";
import { store } from "../../../app/store";
import jobModalSlice from "../../../app/slices/jobModalSlice";
import Badges from "../../JobView/modules/Badges";

export default function CompanyBubble(props: {
  backgroundColor: string;
  bubbleSize: number;
  textColor: any;
  name:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  symbol:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor + "d0",
        cursor: "pointer",
      }}
      className={"companyBubble"}
      onClick={() => {
        store.dispatch(
          jobModalSlice.actions.setData({ isOpen: true, data: {} })
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
          opacity: props.bubbleSize > 50 ? 1 : 0,
        }}
      >
        <p
          style={{
            color: props.textColor,
            fontSize: 14,
            marginBottom: 6,
            fontWeight: 1000,
            maxWidth: 150,
            textAlign: "center",
          }}
        >
          {props.name}
        </p>
        <p
          style={{
            color: props.textColor,
            fontSize: 14,

            textAlign: "center",
          }}
        >
          100k €/year
        </p>

        <p
          style={{
            color: props.textColor,
            fontSize: 12,

            textAlign: "center",
          }}
        >
          <Badges />
        </p>
      </div>
    </div>
  );
}
