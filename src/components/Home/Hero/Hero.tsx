interface HeroProps {
  title: string;
  titleFeatured: string;
  description: string;
  href: string;
  btnText: string;
}

export default function Hero(props: HeroProps) {
  const { title, titleFeatured, description, href, btnText } = props;

  return (
    <div className="relative bg-white overflow-hidden mb-4">
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

      {/* <iframe
        className="w-full h-full absolute left-0 hidden lg:block"
        src="https://www.youtube.com/embed/Lfggatcjy5U?autoplay=1&controls=0&showinfo=0&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}

      <img
        className="absolute left-0 block lg:hidden"
        src="/file/heroVideo/main.png"
      ></img>

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
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl  pt-16 pb-16">
              <span className="block xl:inline text-white">{title}</span>
              <span className="block text-tertiary xl:inline">
                {titleFeatured}
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {description}
            </p>
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
