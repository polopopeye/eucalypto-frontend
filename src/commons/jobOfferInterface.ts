export interface JobOfferInterface {
  id?: string;

  company?: string;
  job?: string;
  location?: string;
  remote?: boolean;
  description?: string;
  salary?: string;
  categories?: Array<string>;
  deadLine?: string;
  published?: boolean;

  applicants?: Array<string> | undefined;
  updatedAt?: Date;
  createdAt?: Date;
}
