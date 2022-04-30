export interface CompanyInterface {
  id?: string;
  name: string | undefined;
  description: string | undefined;
  coverImg: string | undefined;
  web: string | undefined;
  linkedIn: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  country: string | undefined;
  owners: Array<string>;
  published: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}
