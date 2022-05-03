/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

import ListCategories from "../categories/listCategories";
import ListCompanies from "../companies/listCompanies";
import ListJobOffers from "../jobOffers/listJobOffers";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@UserProfile.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Back-end Developer",
    department: "Optimization",
    email: "lindsay.walton@UserProfile.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function UserProfile() {
  return (
    <div className="px-4 pt-32">
      <Link href="/dashboard/offers/create">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create New Job Offer
        </button>
      </Link>

      <Link href="/dashboard/companies/create">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create New Company
        </button>
      </Link>

      <Link href="/dashboard/categories/create">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create New Category
        </button>
      </Link>

      <ListJobOffers />
      <ListCompanies />
      <ListCategories />

      {/* <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Job applications
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            List of all the applications you are currently on.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    ></th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">More Information</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="mb-4 p-2  sm:mb-0 sm:mr-4 flex">
                          <svg
                            viewBox="0 0 503 100"
                            className="h-auto w-full    "
                            preserveAspectRatio="none"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect
                              width="50"
                              height="50"
                              x="0"
                              y="0"
                              fill="#54dea8"
                            ></rect>
                            <rect
                              width="50"
                              height="50"
                              x="0"
                              y="50"
                              fill="#54dea8"
                            ></rect>
                            <path
                              d="M132 70.3551H165.52V61.2273H143.071V17.9915H132V70.3551Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M188.231 71.1222C200.146 71.1222 207.561 62.9659 207.561 50.8722C207.561 38.7017 200.146 30.571 188.231 30.571C176.317 30.571 168.902 38.7017 168.902 50.8722C168.902 62.9659 176.317 71.1222 188.231 71.1222ZM188.282 62.6847C182.785 62.6847 179.973 57.6477 179.973 50.7955C179.973 43.9432 182.785 38.8807 188.282 38.8807C193.677 38.8807 196.49 43.9432 196.49 50.7955C196.49 57.6477 193.677 62.6847 188.282 62.6847Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M230.176 85.9006C241.401 85.9006 249.378 80.7869 249.378 70.7386V31.0824H238.563V37.679H238.154C236.696 34.483 233.5 30.571 226.929 30.571C218.313 30.571 211.026 37.2699 211.026 50.642C211.026 63.7074 218.108 69.7926 226.955 69.7926C233.219 69.7926 236.722 66.6477 238.154 63.4006H238.614V70.5852C238.614 75.9801 235.162 78.0767 230.432 78.0767C225.625 78.0767 223.196 75.9801 222.301 73.6023L212.228 74.9574C213.532 81.1449 219.591 85.9006 230.176 85.9006ZM230.407 61.6108C225.063 61.6108 222.148 57.3665 222.148 50.5909C222.148 43.9176 225.012 39.2386 230.407 39.2386C235.699 39.2386 238.665 43.7131 238.665 50.5909C238.665 57.5199 235.648 61.6108 230.407 61.6108Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M273.63 71.1222C285.545 71.1222 292.96 62.9659 292.96 50.8722C292.96 38.7017 285.545 30.571 273.63 30.571C261.715 30.571 254.301 38.7017 254.301 50.8722C254.301 62.9659 261.715 71.1222 273.63 71.1222ZM273.681 62.6847C268.184 62.6847 265.372 57.6477 265.372 50.7955C265.372 43.9432 268.184 38.8807 273.681 38.8807C279.076 38.8807 281.889 43.9432 281.889 50.7955C281.889 57.6477 279.076 62.6847 273.681 62.6847Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M297.882 70.3551H308.774V31.0824H297.882V70.3551ZM303.354 26.0199C306.601 26.0199 309.26 23.5398 309.26 20.4972C309.26 17.4801 306.601 15 303.354 15C300.132 15 297.473 17.4801 297.473 20.4972C297.473 23.5398 300.132 26.0199 303.354 26.0199Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M315.339 85.0824H326.231V64.0653H326.564C328.072 67.3381 331.37 70.9943 337.711 70.9943C346.66 70.9943 353.64 63.9119 353.64 50.7699C353.64 37.2699 346.353 30.571 337.737 30.571C331.166 30.571 328.021 34.483 326.564 37.679H326.078V31.0824H315.339V85.0824ZM326.001 50.7188C326.001 43.7131 328.967 39.2386 334.26 39.2386C339.655 39.2386 342.518 43.9176 342.518 50.7188C342.518 57.571 339.603 62.3267 334.26 62.3267C329.018 62.3267 326.001 57.7244 326.001 50.7188Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M391.418 42.2813C390.446 35.0455 384.617 30.571 374.696 30.571C364.648 30.571 358.026 35.2244 358.051 42.7926C358.026 48.6733 361.733 52.483 369.404 54.017L376.205 55.3722C379.631 56.0625 381.191 57.3153 381.242 59.2841C381.191 61.6108 378.659 63.2727 374.85 63.2727C370.963 63.2727 368.381 61.6108 367.716 58.4148L357.003 58.9773C358.026 66.4943 364.418 71.1222 374.824 71.1222C385 71.1222 392.287 65.9318 392.313 58.1847C392.287 52.5085 388.58 49.108 380.96 47.5483L373.852 46.1165C370.196 45.3239 368.841 44.071 368.867 42.179C368.841 39.8267 371.5 38.2926 374.875 38.2926C378.659 38.2926 380.909 40.3636 381.446 42.8949L391.418 42.2813Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M422.196 53.6335C422.222 58.9006 418.616 61.6619 414.705 61.6619C410.588 61.6619 407.929 58.7727 407.903 54.1449V31.0824H397.011V56.0881C397.037 65.267 402.406 70.8665 410.307 70.8665C416.213 70.8665 420.457 67.8239 422.222 63.2216H422.631V70.3551H433.088V31.0824H422.196V53.6335Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M439.64 70.3551H450.533V46.7813C450.533 42.4347 453.294 39.5455 456.925 39.5455C460.504 39.5455 462.908 42 462.908 45.8608V70.3551H473.467V46.3722C473.467 42.3068 475.794 39.5455 479.757 39.5455C483.234 39.5455 485.842 41.7188 485.842 46.0909V70.3551H496.709V43.9432C496.709 35.429 491.646 30.571 484.334 30.571C478.581 30.571 474.106 33.5114 472.496 38.0114H472.086C470.834 33.4602 466.819 30.571 461.425 30.571C456.132 30.571 452.118 33.3835 450.481 38.0114H450.021V31.0824H439.64V70.3551Z"
                              fill="#282d06"
                            ></path>
                            <circle
                              r="25"
                              cx="75"
                              cy="25"
                              fill="#54dea8"
                            ></circle>
                            <polygon
                              points="50,50 100,50 50,100"
                              fill="#cede54"
                            ></polygon>
                            <path
                              d="M132 70.3551H165.52V61.2273H143.071V17.9915H132V70.3551Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M188.231 71.1222C200.146 71.1222 207.561 62.9659 207.561 50.8722C207.561 38.7017 200.146 30.571 188.231 30.571C176.317 30.571 168.902 38.7017 168.902 50.8722C168.902 62.9659 176.317 71.1222 188.231 71.1222ZM188.282 62.6847C182.785 62.6847 179.973 57.6477 179.973 50.7955C179.973 43.9432 182.785 38.8807 188.282 38.8807C193.677 38.8807 196.49 43.9432 196.49 50.7955C196.49 57.6477 193.677 62.6847 188.282 62.6847Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M230.176 85.9006C241.401 85.9006 249.378 80.7869 249.378 70.7386V31.0824H238.563V37.679H238.154C236.696 34.483 233.5 30.571 226.929 30.571C218.313 30.571 211.026 37.2699 211.026 50.642C211.026 63.7074 218.108 69.7926 226.955 69.7926C233.219 69.7926 236.722 66.6477 238.154 63.4006H238.614V70.5852C238.614 75.9801 235.162 78.0767 230.432 78.0767C225.625 78.0767 223.196 75.9801 222.301 73.6023L212.228 74.9574C213.532 81.1449 219.591 85.9006 230.176 85.9006ZM230.407 61.6108C225.063 61.6108 222.148 57.3665 222.148 50.5909C222.148 43.9176 225.012 39.2386 230.407 39.2386C235.699 39.2386 238.665 43.7131 238.665 50.5909C238.665 57.5199 235.648 61.6108 230.407 61.6108Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M273.63 71.1222C285.545 71.1222 292.96 62.9659 292.96 50.8722C292.96 38.7017 285.545 30.571 273.63 30.571C261.715 30.571 254.301 38.7017 254.301 50.8722C254.301 62.9659 261.715 71.1222 273.63 71.1222ZM273.681 62.6847C268.184 62.6847 265.372 57.6477 265.372 50.7955C265.372 43.9432 268.184 38.8807 273.681 38.8807C279.076 38.8807 281.889 43.9432 281.889 50.7955C281.889 57.6477 279.076 62.6847 273.681 62.6847Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M297.882 70.3551H308.774V31.0824H297.882V70.3551ZM303.354 26.0199C306.601 26.0199 309.26 23.5398 309.26 20.4972C309.26 17.4801 306.601 15 303.354 15C300.132 15 297.473 17.4801 297.473 20.4972C297.473 23.5398 300.132 26.0199 303.354 26.0199Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M315.339 85.0824H326.231V64.0653H326.564C328.072 67.3381 331.37 70.9943 337.711 70.9943C346.66 70.9943 353.64 63.9119 353.64 50.7699C353.64 37.2699 346.353 30.571 337.737 30.571C331.166 30.571 328.021 34.483 326.564 37.679H326.078V31.0824H315.339V85.0824ZM326.001 50.7188C326.001 43.7131 328.967 39.2386 334.26 39.2386C339.655 39.2386 342.518 43.9176 342.518 50.7188C342.518 57.571 339.603 62.3267 334.26 62.3267C329.018 62.3267 326.001 57.7244 326.001 50.7188Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M391.418 42.2813C390.446 35.0455 384.617 30.571 374.696 30.571C364.648 30.571 358.026 35.2244 358.051 42.7926C358.026 48.6733 361.733 52.483 369.404 54.017L376.205 55.3722C379.631 56.0625 381.191 57.3153 381.242 59.2841C381.191 61.6108 378.659 63.2727 374.85 63.2727C370.963 63.2727 368.381 61.6108 367.716 58.4148L357.003 58.9773C358.026 66.4943 364.418 71.1222 374.824 71.1222C385 71.1222 392.287 65.9318 392.313 58.1847C392.287 52.5085 388.58 49.108 380.96 47.5483L373.852 46.1165C370.196 45.3239 368.841 44.071 368.867 42.179C368.841 39.8267 371.5 38.2926 374.875 38.2926C378.659 38.2926 380.909 40.3636 381.446 42.8949L391.418 42.2813Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M422.196 53.6335C422.222 58.9006 418.616 61.6619 414.705 61.6619C410.588 61.6619 407.929 58.7727 407.903 54.1449V31.0824H397.011V56.0881C397.037 65.267 402.406 70.8665 410.307 70.8665C416.213 70.8665 420.457 67.8239 422.222 63.2216H422.631V70.3551H433.088V31.0824H422.196V53.6335Z"
                              fill="#282d06"
                            ></path>
                            <path
                              d="M439.64 70.3551H450.533V46.7813C450.533 42.4347 453.294 39.5455 456.925 39.5455C460.504 39.5455 462.908 42 462.908 45.8608V70.3551H473.467V46.3722C473.467 42.3068 475.794 39.5455 479.757 39.5455C483.234 39.5455 485.842 41.7188 485.842 46.0909V70.3551H496.709V43.9432C496.709 35.429 491.646 30.571 484.334 30.571C478.581 30.571 474.106 33.5114 472.496 38.0114H472.086C470.834 33.4602 466.819 30.571 461.425 30.571C456.132 30.571 452.118 33.3835 450.481 38.0114H450.021V31.0824H439.64V70.3551Z"
                              fill="#282d06"
                            ></path>
                          </svg>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-base font-bold">
                        <h1>Company Name SA</h1>
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{person.title}</div>
                        <div className="text-gray-500">{person.department}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link href="/job/Job-Backend-Developer-for-Kenneth">
                          <a className="text-indigo-600 hover:text-indigo-900">
                            More Information
                          </a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
