import Image from "next/image";
import React from "react";

export const Arrow = (props: { direction: string }) => {
  let src = "/img/steps/arrow/1.png";

  if (props.direction === "left") src = "/img/steps/arrow/1.png";
  if (props.direction === "right") src = "/img/steps/arrow/2.png";
  if (props.direction === "down") src = "/img/steps/arrow/3.png";
  if (props.direction === "up") src = "/img/steps/arrow/4.png";

  return <Image src={src} alt="step" width={150} height={150}></Image>;
};
