import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

import React from 'react';

import TextHeader from '../Utils/TextHeader/TextHeader';
import EarthMoving from './earthResponsive/EarthMoving';

const Contact = () => {
  return (
    <>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="hidden md:block fixed -mt-12 left-0"
        style={{
          width: '150% !important',
          maxWidth: '150% !important',
          height: 'auto',
        }}
      >
        <source src="/file/heroVideo/world.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video
      </video>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="block md:hidden fixed -mt-12 left-0"
        style={{
          height: '90% !important',
          marginLeft: '-25% !important',
          maxWidth: 'none !important',
        }}
      >
        <source src="/file/heroVideo/world2.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video
      </video>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          {/* <div className="z-[100] absolute text-center w-1/2 font-bold text-white text-7xl">
            <h1 className="my-8">Our location...</h1>
            <h1 className="my-8"> Worldwide</h1>
          </div> */}
        </li>
        <li
          className="col-span-1 lg:col-span-2 m-4 rounded-lg shadow bg-primary divide-y divide-gray-200 p-2 text-white"
          style={{ zIndex: 2, background: 'rgb(6 28 45 / 67%)' }}
        >
          <div className="p-4  ">
            <div className=" lg:text-center p-4">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tertiary sm:text-4xl">
                Get in touch
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-100 lg:mx-auto">
                we love to hear from you, feel free to contact us anytime for
                any questions or feedback
              </p>
            </div>
          </div>
          <hr></hr>
          <ul className=" font-semibold text-xl">
            <li className="p-2">📧 gsaitta@eucalyptogroup.com</li>
            <li className="p-2">📱 +34 633 882 353</li>
            <hr className="my-2"></hr>
            <li className="p-2">📧 amartinez@eucalyptogroup.com</li>
            <li className="p-2">📱 +34 681 293 343</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Contact;
