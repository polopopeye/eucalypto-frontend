import React, { useEffect, useState } from "react";
import {
  Animator,
  batch,
  FadeIn,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
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
          <div className="hidden md:block">
            <ScrollContainer snap="none">
              <EmptyStep page={0} />
              <EmptyStep page={1} />

              <ScrollPage page={2}>
                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(windowWidth * -1, 0),
                    MoveOut(windowWidth / 2, 150),
                    Sticky(30, 40)
                  )}
                >
                  <div className="w-64 -z-10">
                    <div className="rounded-lg ">
                      <Arrow direction="right" />
                    </div>
                  </div>
                </Animator>
                <Animator
                  animation={batch(MoveIn(windowWidth * -1, 0), Sticky(12, 27))}
                >
                  <div className="absolute  bg-primary w-64 -z-10">
                    <div className="rounded-lg p-2">
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
                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(0, windowHeight),

                    MoveOut((windowWidth / 2) * -1, 150),

                    Sticky(69, 27)
                  )}
                >
                  <div className="absolute   w-64 -z-20">
                    <div className="  rounded-lg p-2">
                      <Arrow direction="left" />
                    </div>
                  </div>
                </Animator>

                <Animator
                  animation={batch(
                    MoveIn(0, windowHeight / 1.25),
                    MoveOut(0, 0),
                    Sticky(69, 27)
                  )}
                >
                  <div className="absolute  bg-primary w-64 -z-10">
                    <div className="  rounded-lg p-2">
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
              <ScrollPage page={4}>
                <Animator
                  animation={batch(
                    MoveIn(0, windowHeight / 2),

                    MoveOut(windowWidth / 2, 150),
                    Sticky(12, 27)
                  )}
                >
                  <div className="absolute   w-64">
                    <div className="  rounded-lg p-2">
                      <Arrow direction="right" />
                    </div>
                  </div>
                </Animator>
                <Animator
                  animation={batch(
                    MoveIn(0, windowHeight / 2),

                    MoveOut(0, 0),
                    Sticky(12, 27)
                  )}
                >
                  <div className="absolute  bg-primary w-64">
                    <div className="  rounded-lg p-2">
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

              <ScrollPage page={5}>
                <Animator
                  animation={batch(FadeIn(), MoveOut(0, 0), Sticky(69, 27))}
                >
                  <div className="absolute  bg-primary w-64">
                    <div className="  rounded-lg p-2">
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

              <ScrollPage page={6}>
                <Animator
                  animation={batch(
                    FadeIn(),

                    MoveOut((windowWidth / 3) * -1, 0),

                    ZoomOut(1, 2),
                    Sticky(69, 27)
                  )}
                >
                  <div className="absolute  bg-primary w-64">
                    <div className="  rounded-lg p-2">
                      <Step
                        title="Sucess"
                        href="#"
                        src={stepImg[4]}
                        iconForeground="text-teal-700"
                        iconBackground="bg-teal-50"
                      />
                    </div>
                  </div>
                </Animator>
              </ScrollPage>

              <ScrollPage page={7}>
                <Animator
                  animation={batch(
                    FadeIn(),
                    MoveIn(0, windowHeight),
                    MoveOut(0, windowHeight * -1),
                    ZoomIn(1, 2),
                    ZoomOut(2, 2),
                    Sticky(30.6, 25)
                  )}
                >
                  <div className="absolute  bg-primary w-64">
                    <div className="  rounded-lg p-2">
                      <Step
                        title="Ssucess 2"
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
      )}
    </>
  );
};

export default DesktopView;
