/* eslint-disable @next/next/no-img-element */
import React from 'react';
import TextHeader from 'src/components/Utils/TextHeader/TextHeader';
import PostIt from './PostIt';

const Lifecicle = () => {
  return (
    <>
      <hr className="my-2"></hr>
      <TextHeader title="Eucalypto’s lifecycle" category="how we work" />
      <div className="px:4 md:px-4 lg:px-16 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-0 gap-y-4 p-4">
          <PostIt
            options={{
              step: 'Step 1:',
              description:
                'Join the community of people who are building the next',
              className: 'rotate-6',
            }}
          />
          <div className="hidden md:block">
            <img
              className="  w-full self-center p-2 mt-16 "
              alt=""
              src="/file/img/steps/right.png"
            />
          </div>
          <PostIt
            options={{
              step: 'Step 2:',
              description: 'Benefit from the best tools and resources',
              className: '-rotate-6',
            }}
          />
          <div className="md:block hidden"></div>
          <div className="md:block hidden"></div>

          <div className="md:block hidden">
            <img
              className="  w-full z-1 self-center p-2 md:mt-0 rotate-90"
              alt=""
              src="/file/img/steps/right.png"
            />
          </div>
          <PostIt
            options={{
              step: 'Step 4:',
              description: 'We counsel, you decide!',
              className: 'rotate-3',
            }}
          />

          <div className="md:block hidden">
            <img
              className="  w-full self-center p-2 mt-16 rotate-180"
              alt=""
              src="/file/img/steps/right.png"
            />
          </div>
          <PostIt
            options={{
              step: 'Step 3:',
              description:
                'Find the hottest and most exciting challenges. We will be your agent',
              className: '-rotate-12',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Lifecicle;
