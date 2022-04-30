interface ApiInterface {
  root: string;
  user: string;
  company: string;
  categories: string;
  jobOffers: string;
  article: string;
  events: string;
}

export const api: ApiInterface = {
  root: process.env.NEXT_PUBLIC_API_BACKEND as string,
  user: process.env.NEXT_PUBLIC_API_BACKEND + "/user",
  company: process.env.NEXT_PUBLIC_API_BACKEND + "/company",
  categories: process.env.NEXT_PUBLIC_API_BACKEND + "/categories",
  jobOffers: process.env.NEXT_PUBLIC_API_BACKEND + "/job-offers",
  article: process.env.NEXT_PUBLIC_API_BACKEND + "/article",
  events: process.env.NEXT_PUBLIC_API_BACKEND + "/events",
};
