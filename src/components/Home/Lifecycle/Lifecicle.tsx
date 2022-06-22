/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import PostIt from './PostIt';

const Lifecicle = () => {
  return (
    <>
      <div className="bg-[url(/file/webDesign/blackboard.png)]">
        <hr className="my-2"></hr>

        <img src="/file/webDesign/howwework.png" className="w-auto p-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* PASO 2 */}
          <div className="grid grid-cols-4 justify-items-stretch lg:mt-60 order-2 lg:order-1">
            <div className="justify-self-end pr-8">
              <img src="/file/webDesign/2.png" />
            </div>
            <div className="col-span-3 mt-4  mr-8">
              <h1 className="text-white font-bold text-3xl mb-8 px-8">
                Find the hottest and most exciting challenges
              </h1>

              <div className="bg-[url(/file/webDesign/note.png)] bg-cover   bg-no-repeat aspect-square square justify-self-start">
                <img
                  className="float-right mr-16 mt-16 "
                  src="/file/webDesign/star.png"
                />
                <ul className=" text-2xl font-bold px-16 pt-4 ml-8 ">
                  <li className="my-16"> Match with your dream projects</li>
                  <li className="my-16">
                    Upfront Salary, Company, Location, Tech
                  </li>
                  <li className="my-16">Follow up the process in our app</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PASO 1 */}
          <div className="grid grid-cols-4 p-4 lg:-mt-8 order-1 lg:order-2">
            <div className="justify-self-end pr-8">
              <img src="/file/webDesign/1.png" />
            </div>
            <div className="col-span-3 mt-4 mr-8">
              <h1 className="text-white font-bold text-3xl mb-8 px-8">
                Join the community everyone is talking about
              </h1>

              <div className="bg-[url(/file/webDesign/note.png)] bg-cover   bg-no-repeat aspect-square square">
                <img
                  className="float-right mr-32 mt-16 "
                  src="/file/webDesign/arrow.png"
                />
                <ul className="   px-16 pt-4 ml-8 ">
                  <li className=" text-2xl my-16 font-bold"> Just one click</li>
                  <li className=" text-2xl mt-16 font-bold">
                    No chunks of info
                  </li>
                  <li className=" text-lg text-gray-600 m-0">
                    No personal information, only wishes.
                  </li>
                  <li className=" text-2xl mt-16 font-bold">
                    Benefits from our tools
                  </li>
                  <li className=" text-lg text-gray-600 m-0">
                    Tech articles, events, meet-ups and much more.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PASO 4 */}
          <div className="grid grid-cols-4 p-4 lg:mt-40 order-4 lg:order-3">
            <div className="justify-self-end pr-8">
              <img src="/file/webDesign/4.png" />
            </div>
            <div className="col-span-3 mt-4 mr-8">
              <h1 className="text-white font-bold text-3xl mb-8 px-8">
                You are already part of Eucalypto
              </h1>

              <div className="bg-[url(/file/webDesign/note.png)] bg-cover   bg-no-repeat aspect-square square">
                <ul className="   px-16 pt-4 ml-8 ">
                  <li className=" text-2xl mt-8 font-bold">
                    You are one of us
                  </li>
                  <li className=" text-lg text-gray-600 m-0">
                    Either you get the opportunity or not, you will be always
                    part of Eucalypto.
                  </li>
                  <li className=" text-2xl mt-8 font-bold">Stay updated</li>
                  <li className=" text-lg text-gray-600 m-0">
                    Check our news, trends, feed...
                  </li>
                  <li className=" text-2xl my-8 font-bold">
                    Check again our job openings
                  </li>
                  <li className=" text-2xl mt-8 font-bold">
                    Let’s celebrate with a beer,coffee or lunch
                  </li>
                </ul>
                <img
                  className="float-right mr-8 -mt-32 "
                  src="/file/webDesign/party.png"
                />
              </div>
            </div>
          </div>

          {/* PASO 3 */}
          <div className="grid grid-cols-4 p-4 lg:-mt-28 order-3 lg:order-4">
            <div className="justify-self-end pr-8">
              <img src="/file/webDesign/3.png" />
            </div>
            <div className="col-span-3 mt-4 mr-8">
              <h1 className="text-white font-bold text-3xl mb-8 px-8">
                We will be your advisor
              </h1>

              <div className="bg-[url(/file/webDesign/note.png)] bg-cover   bg-no-repeat aspect-square square">
                <ul className="   pl-16 pr-10 pt-4 ml-8 ">
                  <li className=" text-2xl mt-8 font-bold">
                    Not just keywords
                  </li>
                  <li className=" text-lg text-gray-600 m-0">
                    We have more than 7 years’ experience in the field, real
                    knowledge.
                  </li>
                  <li className=" text-2xl mt-8 font-bold">
                    We are supporting you
                  </li>
                  <li className=" text-lg text-gray-600 m-0">
                    There is a specialized team supporting you in every step of
                    the selection process.
                  </li>
                  <li className=" text-2xl mt-8 font-bold">
                    You struggle with something? We will coach you!
                  </li>
                  <li className=" text-2xl my-8 font-bold">
                    We counsel, you decide
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="px:4 md:px-4 lg:px-16 py-4">
          <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-1 md:gap-x-0 gap-y-4 xl:gap-y-0 p-0 md:p-2 md:px-2 lg:px-32 xl:px-64 ">
            <PostIt
              options={{
                step: 'Join the community everyone is talking about:',
                description: [
                  'Just one click',
                  'No chunks of info, no personal information, only wishes',
                  'Benefit from our tools and resources: tech articles, events, meet-ups and much more',
                ],

                className: 'rotate-6',
                href: '/dashboard/user',
              }}
            />

            <div className="hidden lg:block">
              <img
                className="w-full self-center p-4  mt-16 "
                alt=""
                src="/file/img/steps/right.png"
              />
            </div>

            <PostIt
              options={{
                step: 'Find the hottest and most exciting challenges',
                description: [
                  'Match with your dream projects',
                  'Upfront Salary, Company, Location, tech',
                  'Follow up the process in our web app',
                ],
                className: '-rotate-6',
                href: '/search',
              }}
            />
            <div className="lg:block hidden"></div>
            <div className="lg:block hidden"></div>
            <div className="lg:block hidden"></div>
            <div className="lg:block hidden"></div>

            <div className="lg:block hidden">
              <img
                className="  w-full z-1 self-center p-2 md:mt-0 rotate-90"
                alt=""
                src="/file/img/steps/right.png"
              />
            </div>

            <PostIt
              options={{
                step: 'You are already part of Eucalypto',
                description: [
                  'Either you get the opportunity or not, you will be always part of our community',
                  'Check our news, trends, feed… and stay updated',
                  'Check again our job openings',
                  'Let’s celebrate it with a beer, coffee or lunch :D',
                ],
                className: 'rotate-3',
                href: 'https://www.linkedin.com/company/85973376/',
              }}
            />

            <div className="lg:block hidden">
              <img
                className="  w-full self-center p-2 mt-16 rotate-180"
                alt=""
                src="/file/img/steps/right.png"
              />
            </div>
            <PostIt
              options={{
                step: 'We will be your advisor:',
                description: [
                  'We have more than 7 years’ experience in the field, real knowledge not just keywords',
                  'We have a specialized team supporting you in every step of the selection process                 ',
                  'You struggle with anything? We will coach you!',
                  'We counsel, you decide',
                ],
                className: '-rotate-12',
                href: '/contact',
              }}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Lifecicle;
