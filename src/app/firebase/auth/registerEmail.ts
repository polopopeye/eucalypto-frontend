import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { errors } from '../constants';
import { toast } from 'react-toastify';
import registerUserInBackend from '../../backend/users/registerUserInBackend';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';

const registerEmail = (email: string, password: string) => {
  const normalizedEmail = email.toLowerCase().trim();
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, normalizedEmail, password)
    .then((userCredential) => {
      registerUserInBackend(
        {
          completeName: normalizedEmail,
          displayName: normalizedEmail,
          languages: ['english'],
          role: 'talent',
          coverImg:
            'https://picsum.photos/seed/' + normalizedEmail + '/200/200',
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
      const errorCode = error.code;
      const errorMessage = errors[errorCode];
      toast.error(errorMessage);
      return errorMessage;
    });
};

export default registerEmail;
