import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  StickyOut,
  ZoomOut,
  Zoom,
} from "react-scroll-motion";
import TextHeader from "../../Utils/TextHeader/TextHeader";
import Step from "./modules/step";

const Arrow = (props: { direction: string }) => {
  const [src] = useState(
    props.direction === "left"
      ? "/img/steps/arrow/1.png"
      : "/img/steps/arrow/2.png"
  );

  return <Image src={src} alt="step" width={200} height={200}></Image>;
};

const ScrollSteps = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeigth] = useState(0);
  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
    setWindowWidth(typeof window !== undefined ? window.innerWidth : 0);
    setWindowHeigth(typeof window !== undefined ? window.innerHeight : 0);
  }, []);

  const stepImg = [
    "/img/steps/1.png",
    "/img/steps/2.png",
    "/img/steps/3.png",
    "/img/steps/4.png",
    "/img/steps/5.png",
    "/img/steps/6.png",
    "/img/steps/7.png",
  ];

  return (
    <>
      <TextHeader
        title="We guide you through the process"
        category="Transactions"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam."
        className="my-16"
      />

      {isBrowser && (
        <ScrollContainer snap="none">
          <ScrollPage page={0}>
            <Animator animation={FadeIn()}>
              <div className="bg-primary my-8 rounded-lg p-8 w-96 absolute z-10">
                <Step
                  title="Step 1"
                  href="#"
                  src={stepImg[0]}
                  iconForeground="text-teal-700"
                  iconBackground="bg-teal-50"
                />
              </div>
            </Animator>
            <Animator
              animation={batch(MoveIn(0, 0), MoveOut(windowWidth / 1.9, 300))}
            >
              <div className="    w-96 -z-10">
                <div className="  rounded-lg p-8">
                  <Arrow direction="right" />
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator
              animation={batch(
                FadeIn(),
                MoveIn(0, windowHeight),

                MoveOut((windowWidth / 2) * -1, 300),

                Sticky(67, 27)
              )}
            >
              <div className="absolute   w-96 -z-20">
                <div className="  rounded-lg p-8">
                  <Arrow direction="left" />
                </div>
              </div>
            </Animator>

            <Animator
              animation={batch(
                MoveIn(0, windowHeight),
                MoveOut(0, 0),
                Sticky(67, 27)
              )}
            >
              <div className="absolute  bg-primary w-96 -z-10">
                <div className="  rounded-lg p-8">
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
          <ScrollPage page={2}>
            <Animator
              animation={batch(
                MoveIn(0, windowHeight / 2),

                MoveOut(windowWidth / 2, 150),
                Sticky(20, 27)
              )}
            >
              <div className="absolute   w-96">
                <div className="  rounded-lg p-8">
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
              <div className="absolute  bg-primary w-96">
                <div className="  rounded-lg p-8">
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

          <ScrollPage page={3}>
            <Animator
              animation={batch(FadeIn(), MoveOut(0, 0), Sticky(67, 27))}
            >
              <div className="absolute  bg-primary w-96">
                <div className="  rounded-lg p-8">
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

          <ScrollPage page={4}>
            <Animator
              animation={batch(
                FadeIn(),

                MoveOut((windowWidth / 3) * -1, 0),

                ZoomOut(1, 2),
                Sticky(67, 27)
              )}
            >
              <div className="absolute  bg-primary w-96">
                <div className="  rounded-lg p-8">
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

          <ScrollPage page={5}>
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
              <div className="absolute  bg-primary w-96">
                <div className="  rounded-lg p-8">
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
      )}
    </>
  );
};

export default ScrollSteps;
