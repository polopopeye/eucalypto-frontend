/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Stars from './Stars';

interface TextHeaderProps {
  stars: number;
  review: string;
  name: string;
  src: string;
}

const ReviewCard = (props: TextHeaderProps) => {
  const { stars, review, name, src } = props;

  return (
    <div className="w-full h-auto">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-6 gap-2 w-full ">
          <div className="w-full   hidden md:block col-span-1"></div>
          <div className="col-span-2 md:col-span-1 float-right self-center  right-0 w-full text-center ">
            <img
              className="inline-block h-auto rounded-full float-right right-0  w-36 border-4 border-secondary"
              src={src}
              alt={name}
            />
          </div>
          <div className="col-span-4  md:col-span-3    w-full">
            <h4 className="text-lg font-semibold">{name}</h4>
            <Stars stars={stars} />
            <p className=" p-4 max-w-md h-auto">{review}</p>
          </div>
          <div className="w-full hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
