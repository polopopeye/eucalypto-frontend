import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { api } from 'src/app/backend/apiEndPoints';
import registerUserInBackend from 'src/app/backend/users/registerUserInBackend';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import loginEmail from './loginEmail';

const getDataLinkedIn = (authCode: string) => {
  const apiRoot = api.root;
  const url = apiRoot + '/Oauth/linkedIn-User/';

  const uri = window.location.origin + '/signin'; // Redirect uri

  axios
    .post(url, { authCode, uri })
    .then((res) => {
      console.log(
        '🚀 ~ file: LoginRegister.tsx ~ line 19 ~ axios.get ~ res',
        res.data
      );
      const email = res.data.email.elements[0]['handle~'].emailAddress;
      const profile = res.data.profile;
      const completeName =
        profile.localizedFirstName + ' ' + profile.localizedLastName;
      const pw = profile.id;

      const normalizedEmail = email.toLowerCase().trim();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, normalizedEmail, pw)
        .then((userCredential) => {
          registerUserInBackend(
            {
              completeName: completeName,
              displayName: completeName,
              languages: ['english'],
              role: 'talent',
              coverImg: '/file/img/Icono_Negativo.png',
              email: normalizedEmail,
              published: true,
            },
            (user: any) => {
              retrieveUserInfo({
                prop: 'email',
                value: user.email as string,
              });
            }
          );
        })
        .catch((error) => {
          // USER ALREADY REGISTERED
          loginEmail(normalizedEmail, pw);
        });
    })
    .catch((err) => {
      console.log(
        '🚀 ~ file: LoginRegister.tsx ~ line 22 ~ axios.get ~ err',
        err
      );
    });
};

export default getDataLinkedIn;
