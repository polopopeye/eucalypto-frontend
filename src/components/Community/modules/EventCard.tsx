import { Menu } from "@headlessui/react";
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  StarIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import React from "react";
import FooterCard from "./FooterCard";
import HeaderCard from "./HeaderCard";

const EventCard = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
      <HeaderCard />
      <div className="flex mt-4">
        <div>
          <h4 className="text-lg font-bold">EU-Startups Summit</h4>
          <h4 className="text-sm font-bold text-primary">
            Thu, May 12, 9:30 AM
          </h4>
          <p className="mt-1">
            Palau de Congressos • Barcelona <br />
            Starts at €149.00
          </p>
          <div className="text-center w-full">
            <button
              type="button"
              className="mt-8 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              More Info
            </button>
          </div>
        </div>
        <div className="ml-4  p-4  w-72">
          <img src="/img/community/events/1.jpg"></img>
        </div>
      </div>
      <FooterCard type="Event" />
    </div>
  );
};

export default EventCard;
