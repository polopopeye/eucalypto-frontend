export interface UserInterface {
  id?: string;
  completeName?: string | undefined;
  displayName?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  github?: string | undefined;
  web?: string | undefined;
  linkedIn?: string | undefined;
  location?: string | undefined;
  coverImg?: string;
  languages?: Array<string>;
  categories?: Array<string>;
  role?: string;
  curriculum?: string;
  published?: boolean;
  jobOffers?: { id: string; status: Array<string> }[];

  createdAt?: object;
  updatedAt?: object;
}
