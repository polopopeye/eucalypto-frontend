import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import registerUserInBackend from '../../backend/users/registerUserInBackend';
import { toast } from 'react-toastify';
import { errors } from '../constants';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import newUpload from '../storage/newUpload';

const registerGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const { email, displayName } = user;
      const nameId = (displayName as string) || (email as string);

      registerUserInBackend(
        {
          completeName: nameId,
          displayName: nameId,
          languages: ['english'],
          role: 'talent',
          coverImg: '/file/img/Icono_Negativo.png',
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
      const errorMessage = errors[errorCode];
      toast.error(errorMessage);
      return errorMessage;
    });
};

export default registerGoogle;
