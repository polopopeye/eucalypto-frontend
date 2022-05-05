export interface StatusJobOfferInterface {
  id?: string;

  idJob?: string;
  idUser?: string;
  status?: string;
  description?: string;

  published?: boolean;

  updatedAt?: any;
  createdAt?: Date;
}
