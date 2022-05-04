import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import registerUserInBackend from '../../backend/users/registerUserInBackend';
import { toast } from 'react-toastify';
import { errors } from '../constants';

const registerGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const { email, displayName, photoURL } = user;
      const nameId = (displayName as string) || (email as string);
      registerUserInBackend({
        completeName: nameId,
        displayName: nameId,
        languages: ['english'],
        role: 'talent',
        coverImg:
          photoURL || 'https://picsum.photos/seed/' + email + '/200/200',
        email: email as string,
        published: true,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = errors[errorCode];
      toast.error(errorMessage);
      return errorMessage;
    });
};

export default registerGoogle;
