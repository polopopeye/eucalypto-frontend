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
          >
            <img
              src="/file/webDesign/aboutUsBg.png"
              className="relative h-full w-full"
            />
          </div>

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
        <div className="p-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-4">
            <div className="bg-[url('/file/webDesign/helpBadge1.png')] bg-cover rounded-br-3xl bg-no-repeat py-4 text-center w-full grid grid-cols-1">
              <span>Find & Select</span>
              <span>
                <b>hidden talents</b>
              </span>
            </div>
            <div className="bg-[url('/file/webDesign/helpBadge2.png')] bg-cover rounded-br-3xl bg-no-repeat py-4 text-center w-full grid grid-cols-1">
              <span>Access candidates & partners</span>
              <span>
                <b>along the selection process</b>
              </span>
            </div>
            <div className="bg-[url('/file/webDesign/helpBadge3.png')] bg-cover rounded-br-3xl bg-no-repeat py-4 text-center w-full grid grid-cols-1">
              <span>Evaluate several candidates</span>
              <span>
                <b>for the same vacancy</b>
              </span>
            </div>
            <div className="bg-[url('/file/webDesign/helpBadge4.png')] bg-cover rounded-br-3xl  bg-no-repeat py-4 text-center w-full grid grid-cols-1">
              <span>Give access to</span>
              <span>
                <b>top-notch IT communities</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
