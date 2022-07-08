import { ArrowLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { UserInterface } from 'src/commons/userInterface';
import ListJobOffers from 'src/components/Dashboard/jobOffers/listJobOffers';
import Badges from 'src/components/Utils/categories/badges';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import TextHeader from 'src/components/Utils/TextHeader/TextHeader';

const ViewJobsListPage = () => {
  const checkUserInfo = useCheckUserInfo();
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState(undefined as unknown as UserInterface);
  const [jobOffers, setJobOffers] = useState(
    undefined as unknown as JobOfferInterface[]
  );

  useEffect(() => {
    retrieveJobOffers(
      {
        prop: 'applicants',
        value: userId as string,
        reduxSpace: 'none',
      },
      (jobsFound: JobOfferInterface[]) => {
        setJobOffers(jobsFound);
      }
    );

    retrieveUserInfo(
      {
        prop: 'id',
        value: userId as string,
        reduxSpace: 'none',
      },
      (userFound: UserInterface) => {
        setUser(userFound);
      }
    );
    retrieveCategories({
      propToFind: 'type',
      value: 'tech',
      saveIn: 'tech',
    });
  }, [userId]);

  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  if (!user) return <LoadingComponent />;

  return (
    <div className="p-32">
      <Link href="/dashboard/user">
        <button
          type="button"
          className="bg-white mt-16 py-2 px-4 flex border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeftIcon className="w-5 h-5 mx-4" /> Back to dashboard
        </button>
      </Link>
      <TextHeader
        title={user.displayName}
        description={
          'List of the jobs where ' +
          user.displayName +
          ' is currently registered'
        }
      />
      <img
        src={user.coverImg}
        className="w-32 h-auto m-auto rounded-full mt-4"
      />
      <Badges categoriesId={user.categories} />
      {jobOffers ? (
        <ListJobOffers
          description={'Jobs applied by the user:'}
          jobsOffers={jobOffers}
        />
      ) : (
        <h1 className="text-lg ">This user is not in any selection process </h1>
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

export default ViewJobsListPage;
