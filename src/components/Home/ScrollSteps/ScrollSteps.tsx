import React, { useEffect, useState } from "react";

import TextHeader from "../../Utils/TextHeader/TextHeader";
import DesktopView from "./modules/DesktopView";

import MobileView from "./modules/MobileView";

const ScrollSteps = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
  }, []);

  return (
    <>
      {isBrowser && (
        <>
          <DesktopView />
          <MobileView />
        </>
      )}
    </>
  );
};

export default ScrollSteps;
