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
        className=" fixed -mt-12 left-0"
        style={{
          width: '100% !important',
          height: 'auto',
        }}
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/eucalypto-group.appspot.com/o/production%20ID_4478322.mp4?alt=media&token=b56364a6-c707-4e2c-b5dc-ddee6f45eac5"
          type="video/mp4"
        />
        Tu navegador no soporta el formato de video
      </video>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
      >
        <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          {/* <div className="z-[100] absolute text-center w-1/2 font-bold text-white text-7xl">
            <h1 className="my-8">Our location...</h1>
            <h1 className="my-8"> Worldwide</h1>
          </div> */}
        </li>
        <li
          className="col-span-1 m-4 rounded-lg shadow divide-y divide-gray-200 p-2"
          style={{ zIndex: 2, backgroundColor: 'rgb(255 255 255 / 84%)' }}
        >
          <div className="p-4  ">
            <TextHeader
              title="Get in touch"
              description="we love to hear from you, feel free to contact us anytime for any questions or feedback"
            />
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
