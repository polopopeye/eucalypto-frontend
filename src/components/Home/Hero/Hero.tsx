/* eslint-disable @next/next/no-img-element */
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
    <div
      className="relative bg-white  overflow-hidden mb-4"
      style={{ width: '100%' }}
    >
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className=" absolute -mt-12 left-0 hidden lg:block"
        style={{
          width: '100% !important',
          height: 'auto',
        }}
      >
        <source src="/file/heroVideo/heroVideo.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video
      </video>

      <img
        className="absolute left-0 block lg:hidden h-full w-auto"
        src="/file/heroVideo/main.png"
        alt=""
        style={{
          maxWidth: 'none',
        }}
      />

      <div
        style={{ background: 'rgb(6 28 45 / 67%)' }}
        className="lg:ml-4 mb-4 relative z-10 pb-8   sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-8 xl:pb-32"
      >
        <svg
          className="hidden lg:block text-secondary absolute right-0 inset-y-0 h-full w-16 transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <div className="pt-32  ">
              <h1
                className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl  min-h-[128px] max-h-[128px] "
                ref={el}
              ></h1>
            </div>

            <p
              ref={subtitleEl}
              className="mt-3 text-base min-h-[64px] max-h-[64px] text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            ></p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                {btnText && (
                  <a
                    href={href}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary md:py-4 md:text-lg md:px-10"
                  >
                    {btnText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
