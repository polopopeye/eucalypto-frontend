import React, { useEffect, useState } from "react";
import {
  Animator,
  batch,
  FadeIn,
  FadeOut,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Hero from "../../Hero/Hero";
import Reviews from "../../Reviews/Reviews";
import { Arrow } from "./ArrowImage";
import EmptyStep from "./EmptyStep";
import Step from "./Step";

const MobileView = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeigth] = useState(0);

  const stepImg = [
    "/img/steps/1.png",
    "/img/steps/2.png",
    "/img/steps/3.png",
    "/img/steps/4.png",
    "/img/steps/5.png",
    "/img/steps/6.png",
    "/img/steps/7.png",
  ];

  useEffect(() => {
    setWindowWidth(typeof window !== undefined ? window.innerWidth : 0);
    setWindowHeigth(typeof window !== undefined ? window.innerHeight : 0);
  }, []);

  const ArrowAnimation = () => {
    return (
      <Animator
        animation={batch(
          FadeIn(),
          MoveIn(windowWidth * -1, 0),
          MoveOut(windowWidth, 0),
          Sticky(0, 5)
        )}
      >
        <div className="absolute   w-96 -z-20">
          <div className="  rounded-lg p-8">
            <Arrow direction="right" />
          </div>
        </div>
      </Animator>
    );
  };

  return (
    <>
      <div className="block md:hidden">
        <ScrollContainer snap="none">
          <ScrollPage debugBorder page={0}>
            <Hero
              title="Your hidden"
              titleFeatured=" oportunities"
              src=" https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam."
              btnText="Find out more"
              href="/search"
            />
          </ScrollPage>
          <ScrollPage debugBorder page={1}>
            <Reviews />
          </ScrollPage>

          <ScrollPage page={2}>
            <ArrowAnimation />
            <Animator animation={batch(FadeIn(0, 1), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 1"
                    href="#"
                    src={stepImg[0]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <Animator animation={batch(FadeOut(1, 0.7), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 1"
                    href="#"
                    src={stepImg[0]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          {/* STEP2 */}
          <ScrollPage page={4}>
            <ArrowAnimation />
            <Animator animation={batch(FadeIn(0, 1), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 2"
                    href="#"
                    src={stepImg[1]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator animation={batch(FadeOut(1, 0.7), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 2"
                    href="#"
                    src={stepImg[1]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          {/* STEP 3 */}
          <ScrollPage page={6}>
            <ArrowAnimation />
            <Animator animation={batch(FadeIn(0, 1), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 3"
                    href="#"
                    src={stepImg[2]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={7}>
            <Animator animation={batch(FadeOut(1, 0.7), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 3"
                    href="#"
                    src={stepImg[2]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          {/* STEP 4 */}
          <ScrollPage page={8}>
            <ArrowAnimation />
            <Animator animation={batch(FadeIn(0, 1), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 4"
                    href="#"
                    src={stepImg[3]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={9}>
            <Animator animation={batch(FadeOut(1, 0.7), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Step 4"
                    href="#"
                    src={stepImg[3]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          {/* Success 1 */}
          <ScrollPage page={10}>
            <ArrowAnimation />
            <Animator animation={batch(FadeIn(0, 1), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Sucess 1"
                    href="#"
                    src={stepImg[4]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={11}>
            <Animator animation={batch(FadeOut(1, 0.7), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Sucess 1"
                    href="#"
                    src={stepImg[4]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          {/* Success 2 */}
          <ScrollPage page={12}>
            <ArrowAnimation />
            <Animator animation={batch(FadeIn(0, 1), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Sucess 2"
                    href="#"
                    src={stepImg[5]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={13}>
            <Animator animation={batch(FadeOut(1, 0.7), Sticky(0, 25))}>
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="rounded-lg p-8">
                  <Step
                    title="Sucess 2"
                    href="#"
                    src={stepImg[5]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  );
};

export default MobileView;
