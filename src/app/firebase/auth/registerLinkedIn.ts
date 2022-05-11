import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from 'firebase/auth';
import registerUserInBackend from '../../backend/users/registerUserInBackend';
import { toast } from 'react-toastify';
import { errors } from '../constants';

const registerLinkedIn = async () => {
  const auth = getAuth();
  const provider = new OAuthProvider('linkedin.com');
  // const provider = new OAuthProvider('microsoft.com');
  //www.linkedin.com/oauth/v2/authorization
  // TODO: change localhost by the real url
  https: provider.setCustomParameters({
    tenant: 'common',
    client_id: '78pctji9v7v9at',
    response_type: 'code',
    redirect_uri: 'http://localhost:3000/dashboard/user',
    scope: 'r_liteprofile r_emailaddress',
  });

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(
        '🚀 ~ file: registerLinkedIn.ts ~ line 13 ~ .then ~ result',
        result
      );
      const user = result.user;
      const { email, displayName, photoURL } = user;
      // const nameId = (displayName as string) || (email as string);
      // registerUserInBackend({
      //   completeName: nameId,
      //   displayName: nameId,
      //   languages: ['english'],
      //   role: 'talent',
      //   coverImg:
      //     photoURL || 'https://picsum.photos/seed/' + email + '/200/200',
      //   email: email as string,
      //   published: true,
      // });
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(
        '🚀 ~ file: registerLinkedIn.ts ~ line 47 ~ registerLinkedIn ~ errorCode',
        errorCode
      );
      const errorMessage = errors[errorCode];
      toast.error(errorMessage);
      return errorMessage;
    });
};

export default registerLinkedIn;
