/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import PostIt from './PostIt';

const Lifecicle = () => {
  const css = {
    dinamic_my: ' my-8 xl:my-12 2xl:my-16 ',
    dinamic_my2: ' my-4 xl:my-6 2xl:my-10 ',
    dinamic_mt: ' mt-8 xl:mt-12 2xl:mt-16 ',
    dinamic_mt2: ' mt-4 xl:mt-6 2xl:mt-10 ',
    dinamic_text_size: ' text-lg lg:text-lg 2xl:text-3xl ',
    dinamic_text_size2: ' text-base lg:text-base 2xl:text-lg ',
  };

  return (
    <>
      <div className="bg-[url(/file/webDesign/blackboard.png)]">
        <hr className="my-2"></hr>

        <img src="/file/webDesign/howwework.png" className="w-auto p-8 pt-16" />

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
                <ul
                  className={
                    ' font-bold px-16 pt-4 ml-8 ' + css.dinamic_text_size
                  }
                >
                  <li className={css.dinamic_my}>
                    Match with your dream projects
                  </li>
                  <li className={css.dinamic_my}>
                    Upfront Salary, Company, Location, Tech
                  </li>
                  <li className={css.dinamic_my}>
                    Follow up the process in our app
                  </li>
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
                  <li
                    className={
                      ' font-bold' + css.dinamic_my + css.dinamic_text_size
                    }
                  >
                    Just one click
                  </li>
                  <li
                    className={
                      '  font-bold' + css.dinamic_mt + css.dinamic_text_size
                    }
                  >
                    No chunks of info
                  </li>
                  <li className={' text-gray-600 m-0' + css.dinamic_text_size2}>
                    No personal information, only wishes.
                  </li>
                  <li
                    className={
                      ' font-bold' + css.dinamic_mt + css.dinamic_text_size
                    }
                  >
                    Benefits from our tools
                  </li>
                  <li className={' text-gray-600 m-0' + css.dinamic_text_size2}>
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
                  <li
                    className={
                      'font-bold ' + css.dinamic_text_size + css.dinamic_mt2
                    }
                  >
                    You are one of us
                  </li>
                  <li className={' text-gray-600 ' + css.dinamic_text_size2}>
                    Either you get the opportunity or not, you will be always
                    part of Eucalypto.
                  </li>
                  <li className={' mt-8 font-bold ' + css.dinamic_text_size}>
                    Stay updated
                  </li>
                  <li className={' text-gray-600 ' + css.dinamic_text_size2}>
                    Check our news, trends, feed...
                  </li>
                  <li
                    className={
                      ' font-bold' + css.dinamic_text_size + css.dinamic_my2
                    }
                  >
                    Check again our job openings
                  </li>
                  <li
                    className={
                      'font-bold ' + css.dinamic_text_size + css.dinamic_mt2
                    }
                  >
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
                <ul className="   pl-12 pr-2 pt-1 ml-2 ">
                  <li
                    className={
                      ' font-bold' + css.dinamic_text_size + css.dinamic_mt2
                    }
                  >
                    Not just keywords
                  </li>
                  <li className={' text-gray-600' + css.dinamic_text_size2}>
                    We have more than 7 years’ experience in the field, real
                    knowledge.
                  </li>
                  <li
                    className={
                      ' font-bold' + css.dinamic_text_size + css.dinamic_mt2
                    }
                  >
                    We are supporting you
                  </li>
                  <li className={' text-gray-600' + css.dinamic_text_size2}>
                    There is a specialized team supporting you in every step of
                    the selection process.
                  </li>
                  <li
                    className={
                      ' font-bold' + css.dinamic_text_size + css.dinamic_mt2
                    }
                  >
                    You struggle with something? We will coach you!
                  </li>
                  <li
                    className={
                      ' font-bold' + css.dinamic_text_size + css.dinamic_my2
                    }
                  >
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
