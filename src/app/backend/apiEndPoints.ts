interface ApiInterface {
  root: string;
  user: string;
  userManualCreate: string;
  company: string;
  categories: string;
  statusJobOffers: string;
  jobOffers: string;
  article: string;
  events: string;
  mail: {
    appliedOk: string;
    welcomeMsg: string;
    statusChanged: string;
  };
}

export const api: ApiInterface = {
  root: process.env.NEXT_PUBLIC_API_BACKEND as string,
  user: process.env.NEXT_PUBLIC_API_BACKEND + '/user',
  userManualCreate: process.env.NEXT_PUBLIC_API_BACKEND + '/user/manual-create',
  company: process.env.NEXT_PUBLIC_API_BACKEND + '/company',
  categories: process.env.NEXT_PUBLIC_API_BACKEND + '/categories',
  jobOffers: process.env.NEXT_PUBLIC_API_BACKEND + '/job-offers',
  statusJobOffers: process.env.NEXT_PUBLIC_API_BACKEND + '/status-job-offers',
  article: process.env.NEXT_PUBLIC_API_BACKEND + '/article',
  events: process.env.NEXT_PUBLIC_API_BACKEND + '/events',
  mail: {
    appliedOk:
      process.env.NEXT_PUBLIC_API_BACKEND + '/mail/sendToUserAppliedOk',
    welcomeMsg:
      process.env.NEXT_PUBLIC_API_BACKEND + '/mail/sendToUserWelcomeMessage',
    statusChanged:
      process.env.NEXT_PUBLIC_API_BACKEND + '/mail/sendToUserStatusChanged',
  },
};
