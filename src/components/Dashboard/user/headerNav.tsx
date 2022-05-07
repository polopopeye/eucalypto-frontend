import { useState } from 'react';
import dashboardNavHeaderSlice from 'src/app/slices/app/dashboardNavHeader';
import { store } from 'src/app/store';
import { classNames } from 'src/components/Utils/classnames';
import ListCategories from '../categories/listCategories';
import ListCompanies from '../companies/listCompanies';
import ListJobOffers from '../jobOffers/listJobOffers';
import ListUsers from '../users/listUsers';

const HeaderNav = () => {
  const [current, setCurrent] = useState(
    store.getState().app.dashboardNavHeader
  );
  const [jobOffers, setJobOffers] = useState(
    store.getState().jobs.personalJobOffers
  );
  const [isAdmin, setIsAdmin] = useState(
    store.getState().user.role === 'admin' ? true : false
  );
  store.subscribe(() => {
    setJobOffers(store.getState().jobs.personalJobOffers);
    setCurrent(store.getState().app.dashboardNavHeader);
    setIsAdmin(store.getState().user.role === 'admin' ? true : false);
  });

  const tabs = [
    { name: 'Jobs Offers' },
    { name: 'Users', admin: true },
    { name: 'Companies', admin: true },
    { name: 'Categories', admin: true },
  ];
  return (
    <div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => {
              if (tab.admin && !isAdmin) {
                return null;
              }
              return (
                <a
                  onClick={() => {
                    setCurrent(tab.name);
                    store.dispatch(
                      dashboardNavHeaderSlice.actions.setData(tab.name)
                    );
                  }}
                  key={tab.name}
                  className={classNames(
                    tab.name === current
                      ? 'border-secondary text-secondary font-bold'
                      : 'border-transparent text-gray-500 font-medium hover:text-gray-700 hover:border-gray-300',
                    'w-1/4 py-4 px-1 text-center border-b-2  text-sm'
                  )}
                >
                  {tab.name}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {current === 'Jobs Offers' && (
        <ListJobOffers
          description={
            isAdmin
              ? 'List of all the jobs offers posted'
              : 'List of the offer you applied'
          }
          jobsOffers={jobOffers}
        />
      )}

      {isAdmin && current === 'Users' && <ListUsers />}
      {current === 'Companies' && <ListCompanies />}
      {current === 'Categories' && <ListCategories />}
    </div>
  );
};

export default HeaderNav;
