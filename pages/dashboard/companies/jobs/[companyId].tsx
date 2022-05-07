import { ArrowLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveAllCompanies from 'src/app/backend/company/retrieveCompanies';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { UserInterface } from 'src/commons/userInterface';
import ListJobOffers from 'src/components/Dashboard/jobOffers/listJobOffers';
import Badges from 'src/components/Utils/categories/badges';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import getCompanyDataFromId from 'src/components/Utils/redux/getCompanyDataFromId';
import TextHeader from 'src/components/Utils/TextHeader/TextHeader';

const ViewCompanyJobsListPage = () => {
  const checkUserInfo = useCheckUserInfo();
  const router = useRouter();
  const { companyId } = router.query;

  const [jobOffers, setJobOffers] = useState(
    undefined as unknown as JobOfferInterface[]
  );

  useEffect(() => {
    retrieveJobOffers(
      {
        prop: 'company',
        value: companyId as string,
        reduxSpace: 'none',
      },
      (jobsFound: JobOfferInterface[]) => {
        setJobOffers(jobsFound);
      }
    );

    retrieveCategories({
      propToFind: 'type',
      value: 'tech',
      saveIn: 'tech',
    });
    retrieveAllCompanies();
  }, [companyId]);

  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  const company = getCompanyDataFromId(companyId as string);
  return (
    <div className="pt-32">
      <Link href="/dashboard/user">
        <button
          type="button"
          className="bg-white mt-16 py-2 px-4 flex border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeftIcon className="w-5 h-5 mx-4" /> Back to dashboard
        </button>
      </Link>
      <TextHeader title={company.name} />
      <img
        src={company.coverImg}
        className="w-32 h-auto m-auto rounded-full mt-4"
      />

      {jobOffers ? (
        <ListJobOffers
          description={'Jobs applied by the user:'}
          jobsOffers={jobOffers}
        />
      ) : (
        <h1 className="text-lg ">This company is empty</h1>
      )}
      <Link href="/dashboard/user">
        <button
          type="button"
          className="bg-white mt-16 py-2 px-4 flex border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeftIcon className="w-5 h-5 mx-4" /> Back to dashboard
        </button>
      </Link>
    </div>
  );
};

export default ViewCompanyJobsListPage;
