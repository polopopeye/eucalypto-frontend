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
            <div className="p-4 m-2 pt-2">
              <h2 className="text-base text-secondary font-bold tracking-wide uppercase">
                About us
              </h2>
              <p className="mt-2  pt-4 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-center text-gray-300">
                Who we are?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                <b>Eucalypto</b> is a web platform that connects top talents to
                companies that are looking to hire the best candidates in the
                European market.
              </p>
              <p className="pt-8 px-2 font-bold  text-gray-300">
                We help companies:
              </p>

              <div className="grid grid-cols-[30px_1fr] p-4 pt-4">
                <div>
                  <CheckCircleIcon className="w-5 h-5 text-secondary" />
                </div>
                <div className="pb-4">
                  Find & select hidden<b> talents</b>
                </div>
                <div>
                  <CheckCircleIcon className="w-5 h-5 text-secondary" />
                </div>
                <div className="pb-4">
                  Assess candidates & partners along the selection process
                </div>
                <div>
                  <CheckCircleIcon className="w-5 h-5 text-secondary" />
                </div>
                <div className="pb-4">
                  Evaluate several candidates for the same vacancy
                </div>
                <div>
                  <CheckCircleIcon className="w-5 h-5 text-secondary" />
                </div>
                <div className="pb-4">
                  Give access to top-notch IT communities
                </div>
              </div>
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
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl text-center">
            We are specialized in the recruitment of tech talents, all over
            Europe.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto text-center">
            We have 7+ years of experience in account & team management,
            proposing added-value IT recruitment services.
          </p>
          <Stats />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
