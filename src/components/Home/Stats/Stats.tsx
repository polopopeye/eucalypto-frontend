import React from 'react';

const Stats = () => {
  return (
    <>
      <div className="py-32 grid grid-cols-1  md:grid-cols-2 gap-2">
        <div className="ml-4 md:ml-16">
          <h4 className="text-4xl">
            We are specialized in the{' '}
            <b className="font-bold text-[40px]">
              recruitment of tech talents,
            </b>{' '}
            all over Europe.
          </h4>
          <p className="py-16">
            We have 7+ years of experience in account & team management,
            proposing added-value IT recruitment services.
          </p>
        </div>
        <div>
          <img
            src="/file/webDesign/statsImg.png"
            className="text-center p-2 sm:p-8 md:p-16 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Stats;
