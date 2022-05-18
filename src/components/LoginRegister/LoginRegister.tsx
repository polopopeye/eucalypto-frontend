/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { LockClosedIcon, MailIcon } from '@heroicons/react/outline';

import loginEmail from 'src/app/firebase/auth/loginEmail';
import RegisterWithEmail from './RegisterWithEmail';
import { store } from 'src/app/store';
import emailRegisterModalSlice from 'src/app/slices/modals/emailRegisterModalSlice';
import registerGoogle from 'src/app/firebase/auth/registerGoogle';
import registerMicrosoft from 'src/app/firebase/auth/registerMicrosoft';

export default function LoginRegister() {
  const email = useRef() as React.RefObject<HTMLInputElement>;
  const password = useRef() as React.RefObject<HTMLInputElement>;
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
