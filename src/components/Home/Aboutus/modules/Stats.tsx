import React from 'react';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

const Stats = () => {
  return (
    <>
      <div className="grid grid-cols-5 text-center py-8">
        <div className="col-span-2 ">
          <p className="py-5 text-primary font-bold text-xl bg-white w-20 h-20 m-auto rounded-full border-secondary border-4 ">
            +
            <AnimatedNumber
              value={7}
              duration={6000}
              formatValue={(value: any) => value.toFixed(0)}
            />
          </p>
          <div className="py-2 grid grid-cols-[20px_1fr] w-48 m-auto">
            <AcademicCapIcon className="w-5 h-5" />
            <p>Years of experience</p>
          </div>
        </div>
        <div>
          <p className="py-5 text-primary font-bold text-xl bg-white w-20 h-20 m-auto rounded-full border-secondary border-4">
            +
            <AnimatedNumber
              value={500}
              duration={7000}
              formatValue={(value: any) => value.toFixed(0)}
            />
          </p>
          <div className="py-2 grid grid-cols-[20px_1fr] w-32 m-auto">
            <UserGroupIcon className="w-5 h-5" />
            <p>Candidates</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="py-5 text-primary font-bold text-xl bg-white w-20 h-20 m-auto rounded-full border-secondary border-4">
            +
            <AnimatedNumber
              value={50}
              duration={8000}
              formatValue={(value: any) => value.toFixed(0)}
            />
          </p>
          <div className="py-2 grid grid-cols-[20px_1fr] w-32 m-auto">
            <BriefcaseIcon className="w-5 h-5 " />
            <p>Companies</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
