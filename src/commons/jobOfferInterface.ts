export interface JobOfferInterface {
  id?: string;

  name: string;
  company: string;
  job: string;
  location: string;
  remote: boolean;
  description: string;
  salary: string;
  categories?: Array<string>;
  deadLine: string;
  published: boolean;

  updatedAt?: Date;
  createdAt?: Date;
}
