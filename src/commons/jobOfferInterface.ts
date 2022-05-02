export interface JobOfferInterface {
  id?: string;

  name: string;
  company: string;
  job: string;
  location: string;
  remote: boolean;
  description: string;
  salary: string;
  categories: Array<string>;
  endTime: Date | string;
  published: boolean;
}
