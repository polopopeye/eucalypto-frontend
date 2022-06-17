/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { RefObject, useEffect } from 'react';
import Typed from 'typed.js';
interface HeroProps {
  href: string;
  btnText: string;
}

export default function Hero(props: HeroProps) {
  const el = React.useRef(null);
  const subtitleEl = React.useRef(null);

  const typed = React.useRef(null) as any;
  const subtitle = React.useRef(null) as any;
  var options = {
    strings: [
      'Finding hidden <b class="text-tertiary">Opportunities</b>',
      'Join, choose and <b class="text-tertiary">play!</b>',
    ],
    typeSpeed: 130,
    startDelay: 1000,
    backSpeed: 100,
    loop: true,
    showCursor: false,

    backDelay: 10000,
  };
  var options2 = {
    strings: [
      'Eucalypto means "hidden good" in ancient Greek: We know that the best opportunities are hidden. Join us and find them!',
      'The community in which you chose the opportunity for your next tech challenge!',
      'Eucalypto is a platform that connects you with the best resources and tools to help you build your next tech challenge.',
    ],
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    loop: true,
    showCursor: false,
    backDelay: 15000,
  };
  useEffect(() => {
    if (el.current && !typed.current) {
      typed.current = new Typed(el.current as any, options);
    }
  }, [el]);

  useEffect(() => {
    if (subtitleEl.current && !subtitle.current) {
      subtitle.current = new Typed(subtitleEl.current as any, options2);
    }
  }, [subtitleEl]);

  const { href, btnText } = props;

  return (
    <div className="relative bg-white  overflow-hidden mb-4 w-full">
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className=" absolute lg:mt-8  xl:-mt-16 2xl:-mt-48 left-0 hidden lg:block"
        style={{
          width: '100% !important',
          height: 'auto',
        }}
      >
        <source src="/file/heroVideo/heroVideo.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video
      </video>

      <img
        className="absolute right-0 block lg:hidden h-full w-auto -ml-0"
        src="/file/img/aboutus/2.jpg"
        alt=""
        style={{
          maxWidth: 'none',
        }}
      />

      <div className=" relative z-10 bg-[url('/file/webDesign/heroBg.png')] bg-cover -mt-8">
        <main className="mt-10 mx-auto mx-8 md:mx-32 xl:mx-32 max-w-7xl   sm:mt-12  md:mt-16 lg:mt-20   xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <div className="pt-24 max-w-[450px] ">
              <h1
                className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl  min-h-[128px] max-h-[128px] "
                ref={el}
              ></h1>
            </div>

            <p
              ref={subtitleEl}
              className="mt-3 md:mt-12 text-base min-h-[64px] max-h-[64px] text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl lg:mx-0"
            ></p>
            <img
              src="/file/webDesign/bubble.png"
              className="absolute  right-72 animate-bubble-translate"
            />
            <img
              src="/file/webDesign/bubble.png"
              className="absolute animate-bubble-translate "
            />
            <div className=" pt-12 pb-24 sm:mt-8 sm:flex sm:justify-center lg:justify-end w-full lg:max-w-[550px] ">
              {btnText && (
                <Link href={href}>
                  <a className="w-64 md:w-72 flex items-center justify-center  border border-transparent text-base font-bold rounded-md text-textBtn hover:text-white  bg-[url('/file/webDesign/mainBtn.png')] bg-contain bg-no-repeat hover:bg-[url('/file/webDesign/secondaryBtn.png')] py-3 md:py-4 md:text-xl md:px-10">
                    {btnText}
                  </a>
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
