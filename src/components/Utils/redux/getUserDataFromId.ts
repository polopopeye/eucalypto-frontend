import React from 'react';
import { UserInterface } from 'src/commons/userInterface';
import { store } from '../../../app/store';
import { CompanyInterface } from '../../../commons/companyInterface';

const getUserDataFromId = (userId: string) => {
  const user = store
    .getState()
    .users.find((x: UserInterface) => x.id === userId);

  if (user) {
    return user as UserInterface;
  }
};

export default getUserDataFromId;
