export interface CompanyInterface {
  name: string;
  description: string;
  coverImg: string;
  web: string;
  linkedIn: string;
  email: string;
  phone: string;
  country: string;
  owners: Array<string>;
  published: boolean;
}
