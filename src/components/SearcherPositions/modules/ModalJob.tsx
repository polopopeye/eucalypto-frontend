import Stars from "../../Home/Reviews/modules/Stars";
import HeaderCompany from "../../JobView/HeaderCompany";

export default function ModalJob() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <HeaderCompany />
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Details</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Application for
            </dt>
            <dd className="mt-1 text-sm text-gray-900">Backend Developer</dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <img src="https://blog.logrocket.com/wp-content/uploads/2021/08/react-nivo-pie-chart-example.png" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
