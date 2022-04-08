/*
  This InputSearcher requires Tailwind CSS v3.0+ 
  
  This InputSearcher requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import {
  CalendarIcon,
  CodeIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PencilAltIcon,
  PhotographIcon,
  TableIcon,
  VideoCameraIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const items = [
  {
    id: 1,
    name: "Text",
    description: "Add freeform text with basic formatting options.",
    url: "#",
    color: "bg-primary",
    icon: PencilAltIcon,
  },

  {
    id: 2,
    name: "Another object asdfadsfadsf",
    description: "Add freeform text with basic formatting options.",
    url: "#",
    color: "bg-secondary",
    icon: CodeIcon,
  },
  {
    id: 3,
    name: "Another test asdfadsfadsf",
    description: "Add freeform text with basic formatting options.",
    url: "#",
    color: "bg-primary",
    icon: LinkIcon,
  },
  {
    id: 4,
    name: "random job",
    description: "Add freeform text with basic formatting options.",
    url: "#",
    color: "bg-secondary",
    icon: ViewBoardsIcon,
  },

  // More items...
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function InputSearcher() {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(true);

  const filteredItems =
    query === ""
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={query}
      as="div"
      className="mx-auto  w-full transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
      onChange={(item) => (window.location = item.url)}
    >
      <div className="relative">
        <SearchIcon
          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <Combobox.Input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filteredItems.length > 0 && (
        <Combobox.Options
          static
          className="max-h-96 scroll-py-3 overflow-y-auto p-3"
        >
          {filteredItems.map((item) => (
            <Combobox.Option
              key={item.id}
              value={item}
              className={({ active }) =>
                classNames(
                  "flex cursor-default select-none rounded-xl p-3",
                  active && "bg-gray-100"
                )
              }
            >
              {({ active }) => (
                <>
                  <div
                    className={classNames(
                      "flex h-10 w-10 flex-none items-center justify-center rounded-lg",
                      item.color
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4 flex-auto">
                    <p
                      className={classNames(
                        "text-sm font-medium",
                        active ? "text-gray-900" : "text-gray-700"
                      )}
                    >
                      {item.name}
                    </p>
                    <p
                      className={classNames(
                        "text-sm",
                        active ? "text-gray-700" : "text-gray-500"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}

      {query !== "" && filteredItems.length === 0 && (
        <div className="py-14 px-6 text-center text-sm sm:px-14">
          <ExclamationCircleIcon
            type="outline"
            name="exclamation-circle"
            className="mx-auto h-6 w-6 text-gray-400"
          />
          <p className="mt-4 font-semibold text-gray-900">No results found</p>
          <p className="mt-2 text-gray-500">
            No components found for this search term. Please try again.
          </p>
        </div>
      )}
    </Combobox>
  );
}
