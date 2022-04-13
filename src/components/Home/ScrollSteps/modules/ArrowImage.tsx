import Image from "next/image";
import React, { useState } from "react";

export const Arrow = (props: { direction: string }) => {
  const [src] = useState(
    props.direction === "left"
      ? "/img/steps/arrow/1.png"
      : "/img/steps/arrow/2.png"
  );

  return <Image src={src} alt="step" width={150} height={150}></Image>;
};
