import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import registerUserInBackend from '../../backend/users/registerUserInBackend';
import { toast } from 'react-toastify';
import { errors } from '../constants';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';

const registerMicrosoft = async () => {
  const auth = getAuth();

  const provider = new OAuthProvider('microsoft.com');

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const { email, displayName, photoURL } = user;
      const nameId = (displayName as string) || (email as string);
      registerUserInBackend(
        {
          completeName: nameId,
          displayName: nameId,
          languages: ['english'],
          role: 'talent',
          coverImg:
            photoURL || 'https://picsum.photos/seed/' + email + '/200/200',
          email: email as string,
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
      console.log(
        '🚀 ~ file: registerMicrosoft.ts ~ line 47 ~ registerMicrosoft ~ errorCode',
        errorCode
      );
      const errorMessage = errors[errorCode];
      toast.error(errorMessage);
      return errorMessage;
    });
};

export default registerMicrosoft;
