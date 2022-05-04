import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useCheckUserInfo from "src/app/firebase/auth/useCheckUserInfo";

import { store } from "../../../src/app/store";
import UserProfile from "../../../src/components/Dashboard/user/UserProfile";

const Index = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <div className="pt-32">Loading</div>;
  if (!checkUserInfo.isLogedIn) router.push("/signin");

  return (
    <>
      <div>{checkUserInfo.isLogedIn && <UserProfile />}</div>
    </>
  );
};

export default Index;
