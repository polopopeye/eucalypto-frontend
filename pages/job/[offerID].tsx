import { useRouter } from "next/router";
import React from "react";
import JobView from "src/components/JobView/JobView";

const Job = () => {
  const router = useRouter();
  const { offerID } = router.query;

  return (
    <div>
      <JobView offerId={offerID as string}></JobView>
    </div>
  );
};

export default Job;
