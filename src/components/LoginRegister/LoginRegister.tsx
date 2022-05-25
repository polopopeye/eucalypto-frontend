/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { LockClosedIcon, MailIcon } from '@heroicons/react/outline';

import loginEmail from 'src/app/firebase/auth/loginEmail';
import RegisterWithEmail from './RegisterWithEmail';
import { store } from 'src/app/store';
import emailRegisterModalSlice from 'src/app/slices/modals/emailRegisterModalSlice';
import registerGoogle from 'src/app/firebase/auth/registerGoogle';
import registerMicrosoft from 'src/app/firebase/auth/registerMicrosoft';
import registerLinkedIn from 'src/app/firebase/auth/registerLinkedIn';
import getDataLinkedIn from 'src/app/firebase/auth/getDataLinkedIn';
import registerGithub from 'src/app/firebase/auth/registerGithub';

export default function LoginRegister() {
  const email = useRef() as React.RefObject<HTMLInputElement>;
  const password = useRef() as React.RefObject<HTMLInputElement>;
  let cnt = 0;
  //this gets the linkedIn code from the url

  useEffect(() => {
    if (window && cnt === 0) {
      cnt++;
      const windowUrl = window.location.search;

      const urlParams = new URLSearchParams(windowUrl);

      const code = urlParams.get('code');

      if (code) {
        getDataLinkedIn(code);
      } else {
        console.log('no code');
      }
    }
  }, []);

  return (
    <>
      <RegisterWithEmail></RegisterWithEmail>

      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 pt-32 pb-32">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-16">
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Sign in with
                  </p>

                  <div className="mt-1 grid grid-cols-1 gap-4">
                    <div>
                      <a
                        onClick={async () => {
                          await registerGoogle();
                        }}
                        className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                      >
                        <svg
                          className="w-5 h-5 mr-8"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M11.99,13.9 L11.99,10.18 L21.35,10.18 C21.49,10.81 21.6,11.4 21.6,12.23 C21.6,17.94 17.77,22 12,22 C6.48,22 2,17.52 2,12 C2,6.48 6.48,2 12,2 C14.7,2 16.96,2.99 18.69,4.61 L15.85,7.37 C15.13,6.69 13.87,5.89 12,5.89 C8.69,5.89 5.99,8.64 5.99,12.01 C5.99,15.38 8.69,18.13 12,18.13 C15.83,18.13 17.24,15.48 17.5,13.91 L11.99,13.91 L11.99,13.9 Z"
                            id="Shape"
                          />
                        </svg>
                        <p className=" text-lg font-bold">Google </p>
                      </a>
                    </div>

                    <div>
                      <a
                        onClick={async () => {
                          await registerMicrosoft();
                        }}
                        className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                      >
                        <svg
                          className="w-5 h-5 mr-8"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 30 30"
                        >
                          <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z" />
                        </svg>

                        <p className=" text-lg font-bold">Microsoft </p>
                      </a>
                    </div>
                    <div>
                      <a
                        onClick={async () => {
                          await registerLinkedIn();
                        }}
                        className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                      >
                        <svg
                          className="w-7 h-7 mr-8"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 64 64"
                        >
                          <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z" />
                        </svg>

                        <p className=" text-lg font-bold">LinkedIn </p>
                      </a>
                    </div>

                    <div>
                      <a
                        onClick={async () => {
                          await registerGithub();
                        }}
                        className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                      >
                        <svg
                          className="w-6 h-6 mr-8"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 50 50"
                        >
                          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                        </svg>

                        <p className=" text-lg font-bold">Github </p>
                      </a>
                    </div>

                    <div className="p-8 justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  ">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          ref={email}
                          type="email"
                          name="email"
                          id="email"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="you@example.com"
                        />
                      </div>

                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockClosedIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          ref={password}
                          type="password"
                          name="password"
                          id="password"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mt-5 sm:mt-6">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                          onClick={async () => {
                            if (email.current && password.current) {
                              await loginEmail(
                                email.current.value,
                                password.current.value
                              );
                            }
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <div className="mt-8">
                        <a
                          onClick={() => {
                            store.dispatch(
                              emailRegisterModalSlice.actions.setData({
                                isOpen: true,
                                data: {},
                              })
                            );
                          }}
                          className="w-full inline-flex justify-center self-center items-center py-2 cursor-pointer"
                        >
                          <svg
                            className="w-5 h-5 mr-8"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 330.001 330.001"
                          >
                            <path
                              id="XMLID_350_"
                              d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602   L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                            />
                            <polygon
                              id="XMLID_351_"
                              points="165.001,146.4 310.087,40.001 19.911,40  "
                            />
                          </svg>

                          <p className=" text-lg font-bold">
                            Create an account
                          </p>
                        </a>
                        <a
                          href="#"
                          className="w-full mt-8 inline-flex justify-center self-center items-center py-2  text-sm font-medium"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/file/img/signIn.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
