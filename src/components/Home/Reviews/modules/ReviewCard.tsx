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
    <div className="w-full">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-2 gap-8">
          <div className="float-right right-0 text-right self-end justify-end content-end items-end">
            <img
              className="inline-block h-auto rounded-full float-right right-0 w-32 "
              src={src}
              alt={name}
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold">{name}</h4>
            <Stars stars={stars} />
            <p className=" p-4 w-96">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
