import { CheckCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import Stats from './modules/Stats';

const Aboutus = () => {
  return (
    <>
      <div className="bg-primary rounded-md text-white -mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="rounded-md"
            style={{
              background: `linear-gradient(
                to right,
                rgba(0,0,0, 0),
                rgb(6 28 45)
              ),url(/file/img/aboutus/3.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div>
            <div className="p-4 m-2 pt-2 w-full grid grid-cols-1">
              <h2 className="text-base text-primary py-3 w-32 text-center font-bold tracking-wide uppercase bg-[url('/file/webDesign/badge1.png')] bg-contain bg-no-repeat">
                About us
              </h2>
              <img src="/file/webDesign/whoweare.png" className="my-8" />

              <p className=" max-w-2xl text-xl text-gray-300 my-8">
                <b>Eucalypto</b> is a web platform that connects top talents to
                companies that are looking to hire the best candidates in the
                European market.
              </p>
              <p className="mt-24 px-2 font-bold text-4xl  text-gray-300">
                We help companies:
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-10 -mt-10 relative"
          style={{
            background: `linear-gradient(
            to bottom,
            rgba(0,0,0, 0),
            rgb(6 28 45)
          )`,
          }}
        ></div>
        <div className="p-4">
          {/* <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl text-center">
            We are specialized in the recruitment of tech talents, all over
            Europe.
          </p> */}
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto text-center">
            We have 7+ years of experience in account & team management,
            proposing added-value IT recruitment services.
          </p> */}
          <Stats />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
