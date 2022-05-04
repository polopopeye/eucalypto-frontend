import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

import React from 'react';

import TextHeader from '../Utils/TextHeader/TextHeader';
import EarthMoving from './earthResponsive/EarthMoving';

const Contact = () => {
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ];

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
      >
        <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <EarthMoving />
          </div>
        </li>
        <li
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 p-2"
          style={{ zIndex: 2 }}
        >
          <div className="p-4">
            <TextHeader
              title="Get in touch"
              description="we love to hear from you, feel free to contact us anytime for any questions or feedback"
            />
          </div>
          <hr></hr>
          <ul className=" font-semibold text-xl">
            <li className="p-2">📱 +34 604 144 510</li>
            <li className="p-2">📧 hello@eucalyptogroup.com</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Contact;
