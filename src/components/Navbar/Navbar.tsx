/* eslint-disable @next/next/no-img-element */
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logOut from "../../app/firebase/auth/logOut";
import { store } from "../../app/store";
import { UserInterface } from "../../commons/userInterface";
import { classNames } from "../Utils/classnames";

import NavButton from "./modules/NavButton";

export default function Navbar() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState({} as UserInterface);

  store.subscribe(() => {
    if (store.getState().user.email) {
      setIsLogedIn(true);
      setUser(store.getState().user);
    } else {
      setIsLogedIn(false);
    }
  });

  return (
    <Disclosure
      as="nav"
      className="bg-white pt-4 shadow fixed w-full z-40 left-0"
    >
      {({ open }) => (
        <>
          <div className="  mx-auto px-8 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="block h-20 w-auto"
                    src="/img/logo1.png"
                    alt="Workflow"
                    width={128}
                    height={75}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavButton href="/" text="Home" />
                  <NavButton href="/search" text="Search for a project" />
                  <NavButton href="/community" text="Community" />
                  {!isLogedIn && <NavButton href="/signin" text="Sign In" />}
                  <NavButton href="/contact" text="Let's talk" />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      <span className="sr-only">Open user menu</span>
                      {isLogedIn ? (
                        <img
                          className="h-auto w-12 rounded-full"
                          src={user.coverImg}
                          alt=""
                        />
                      ) : (
                        <UserIcon className="h-8 w-8 rounded-full" />
                      )}
                    </Menu.Button>
                  </div>

                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {isLogedIn ? (
                      <>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/dashboard/user/">
                              <a
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Dashboard
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/dashboard/user/settings">
                              <a
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() => {
                                logOut();
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </>
                    ) : (
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={"/signin"}>
                            <a
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              SignIn / Login
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    )}
                  </Menu.Items>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                href="/"
                as="a"
                className="bg-primary border-primary text-quaternary block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                href="/search"
                as="a"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Search for a project
              </Disclosure.Button>
              <Disclosure.Button
                href="/community"
                as="a"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Community
              </Disclosure.Button>

              {!isLogedIn && (
                <Disclosure.Button
                  as="a"
                  href="/signin"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Sign In
                </Disclosure.Button>
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  {isLogedIn ? (
                    <img
                      className="h-auto w-12 rounded-full"
                      src={user.coverImg}
                      alt=""
                    />
                  ) : (
                    <UserIcon className="h-8 w-8 rounded-full" />
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user.displayName}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
              </div>
              {isLogedIn && (
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="/dashboard/user/"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/dashboard/user/settings"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    type="button"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    <a
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Sign out
                    </a>
                  </Disclosure.Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
