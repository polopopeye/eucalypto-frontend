/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

import ListCategories from "../categories/listCategories";
import ListCompanies from "../companies/ListCompanies";
import ListJobOffers from "../jobOffers/ListJobOffers";

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
    </div>
  );
}
