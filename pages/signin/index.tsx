import { useRouter } from "next/router";
import React from "react";
import useCheckUserInfo from "src/app/firebase/auth/useCheckUserInfo";
import LoginRegister from "src/components/LoginRegister/LoginRegister";

const Index = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <div className="pt-32">Loading</div>;
  if (checkUserInfo.isLogedIn) router.push("/dashboard/user");

  return (
    <div className=" align-middle self-center content-center items-center  h-full w-full">
      {!checkUserInfo.isLogedIn && <LoginRegister />}
    </div>
  );
};

export default Index;
