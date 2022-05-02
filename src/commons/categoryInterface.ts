export interface CategoryInterface {
  id?: string;
  name?: string;
  type?: string;
  published?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ReduxCategoriesInterface {
  tech?:
    | []
    | [
        {
          id?: string;
          name?: string;
        }
      ];
}
