import loginEmail from "../../app/firebase/auth/loginEmail";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../app/firebase";
import registerEmail from "../../app/firebase/auth/registerEmail";
import RegisterWithEmail from "./RegisterWithEmail";
import { store } from "../../app/store";
import emailRegisterModalSlice from "../../app/slices/modals/emailRegisterModalSlice";
import { LockClosedIcon, MailIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import registerGoogle from "../../app/firebase/auth/registerGoogle";

const auth = getAuth(firebase());

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
                    {/* <div>
                      <a
                        
                        className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                      >
                        <svg
                          className="w-5 h-5 mr-8"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 455 455"
                        >
                          <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z" />
                          <path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z    M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087   c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345   c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537   c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002   z" />
                        </svg>
                        <p className=" text-lg font-bold">LinkedIn</p>
                      </a>
                    </div> */}

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

                    {/* <div>
                      <a
                        href="#"
                        className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                      >
                        <svg
                          className="w-5 h-5 mr-8"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className=" text-lg font-bold">Github </p>
                      </a>
                    </div> */}

                    {/* <div>
                      <a
                        href="#"
                        className="w-full inline-flex justify-center self-center items-center py-2 border border-primary rounded-md shadow-sm  text-sm font-medium  hover:bg-quaternary"
                      >
                        <svg
                          className="w-5 h-5 mr-8"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10 12.5c0-.3-.2-.5-.5-.5h-6c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.6l6 .7c.3 0 .5-.2.5-.4v-5.9zM11.5 12c-.3 0-.5.2-.5.5v5.9c0 .3.2.5.5.6l9 1c.3 0 .5-.2.5-.4v-7c0-.3-.2-.5-.5-.5l-9-.1zM10 4.7c0-.3-.2-.5-.5-.4l-6 .7c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-5.8zM11.5 4.1c-.3 0-.5.3-.5.6v5.9c0 .3.2.5.5.5h9c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.4l-9 .9z" />
                        </svg>
                        <p className=" text-lg font-bold">Microsoft Account </p>
                      </a>
                    </div> */}

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
                          // className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
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
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
