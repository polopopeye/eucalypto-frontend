export interface CategoryInterface {
  name: string;
  type: string;
  published: boolean;
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
