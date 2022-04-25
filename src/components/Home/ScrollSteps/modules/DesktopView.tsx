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
  StickyIn,
  StickyOut,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import TextHeader from "../../../Utils/TextHeader/TextHeader";
import Hero from "../../Hero/Hero";
import Reviews from "../../Reviews/Reviews";
import { Arrow } from "./ArrowImage";
import EmptyStep from "./EmptyStep";
import Step from "./Step";

const DesktopView = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeigth] = useState(0);
  const [windowOrientation, setWindowOrientation] = useState(0);

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
    setWindowOrientation(
      typeof window !== undefined ? window.screen.orientation.angle : 0
    );
  }, []);

  return (
    <>
      {windowOrientation === 0 && (
        <>
          <div className=" hidden md:block">
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
                <Reviews />
              </ScrollPage>

              <ScrollPage debugBorder page={1}>
                <Animator
                  animation={batch(
                    FadeIn(-1, 1),
                    FadeOut(1, -1),
                    Sticky(50, 50)
                  )}
                >
                  <TextHeader
                    title="We guide you through the process"
                    category="Transactions"
                    description="Lorem ipsum dolor sit amet consect adipisicing  "
                  />
                </Animator>
                {/* Arrow */}
                <Animator
                  animation={batch(
                    FadeIn(0, 1),
                    FadeOut(1, 0),
                    MoveIn((windowWidth / 4) * -1, windowHeight / 1.25),
                    MoveOut((windowWidth / 1) * 1, windowHeight * -1),
                    Sticky(50, 30)
                  )}
                >
                  <div className="w-64 -z-10">
                    <div className="rounded-lg ">
                      <Arrow direction="right" />
                    </div>
                  </div>
                </Animator>
                {/* Arrow2 */}
                <Animator
                  animation={batch(
                    FadeIn(0, 1),
                    FadeOut(2, -1),
                    MoveIn(0, windowHeight / 1.25),
                    Sticky(75, 30)
                  )}
                >
                  <div className="w-64 -z-10">
                    <div className="rounded-lg ">
                      <Arrow direction="down" />
                    </div>
                  </div>
                </Animator>

                {/* Arrow3 */}
                <Animator
                  animation={batch(
                    FadeIn(0, 1),
                    FadeOut(1, 0),
                    MoveIn(0, windowHeight / 1.25),
                    MoveOut((windowWidth / 1) * -0.5, windowHeight * -1),
                    Sticky(75, 75)
                  )}
                >
                  <div className="w-64 -z-10">
                    <div className="rounded-lg ">
                      <Arrow direction="left" />
                    </div>
                  </div>
                </Animator>

                {/* Step 1 */}

                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(0, windowHeight / 1.25),
                    MoveOut(0, windowHeight * -1),
                    Sticky(24, 20)
                  )}
                >
                  <Step
                    title="Personal advice"
                    href="#"
                    src={stepImg[0]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </Animator>

                {/* Step 2 */}

                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(0, windowHeight / 1.25),
                    MoveOut(0, windowHeight * -1),
                    Sticky(66, 20)
                  )}
                >
                  <Step
                    title="Step 2"
                    href="#"
                    src={stepImg[1]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </Animator>
                {/* SSTEP 3 */}

                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(0, windowHeight / 1.25),
                    MoveOut(0, windowHeight * -1),

                    Sticky(66, 67)
                  )}
                >
                  <Step
                    title="Step 3"
                    href="#"
                    src={stepImg[2]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </Animator>
                {/* SSTEP 4 */}

                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(0, windowHeight / 1.25),
                    MoveOut(0, windowHeight * -1),

                    Sticky(24, 67)
                  )}
                >
                  <Step
                    title="Step 4"
                    href="#"
                    src={stepImg[3]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </Animator>
              </ScrollPage>

              <ScrollPage debugBorder page={2}>
                {/* Arrow */}
                <Animator
                  animation={batch(
                    FadeIn(0, 1),
                    FadeOut(1, 0),
                    MoveIn(0, windowHeight / 3),
                    Sticky(32, 27)
                  )}
                >
                  <div className="w-64 -z-10">
                    <div className="rounded-lg ">
                      <Arrow direction="down" />
                    </div>
                  </div>
                </Animator>
                {/* Arrow 2*/}
                <Animator
                  animation={batch(
                    FadeIn(0, 1),
                    FadeOut(1, 0),
                    MoveIn((windowWidth / 4) * -1, windowHeight / 1.25),
                    MoveOut((windowWidth / 1) * 1, windowHeight * -1),
                    Sticky(50, 40)
                  )}
                >
                  <div className="w-64 -z-10">
                    <div className="rounded-lg ">
                      <Arrow direction="right" />
                    </div>
                  </div>
                </Animator>

                {/* Step 5 */}

                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(0, windowHeight / 1.25),
                    MoveOut(0, windowHeight * -1),

                    Sticky(24, 30)
                  )}
                >
                  <Step
                    title="Succes 1"
                    href="#"
                    src={stepImg[4]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </Animator>

                {/* Step 6 */}

                <Animator
                  animation={batch(
                    FadeIn(),

                    MoveIn(0, windowHeight / 1.25),
                    MoveOut(0, windowHeight * -1),
                    Sticky(66, 30)
                  )}
                >
                  <Step
                    title="Success 2"
                    href="#"
                    src={stepImg[5]}
                    iconForeground="text-teal-700"
                    iconBackground="bg-teal-50"
                  />
                </Animator>

                <Animator
                  animation={batch(
                    FadeIn(-1, 1),
                    FadeOut(1, -0),
                    MoveIn(0, windowHeight / 4),
                    Sticky(50, 50)
                  )}
                >
                  <TextHeader
                    title=" Success stories"
                    category="Achievements &amp; Awards"
                    description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
                  voluptatum cupiditate veritatis in accusamus quisquam."
                  />
                </Animator>
              </ScrollPage>
            </ScrollContainer>
          </div>
        </>
      )}
    </>
  );
};

export default DesktopView;
