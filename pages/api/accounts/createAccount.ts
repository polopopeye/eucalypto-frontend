// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import iniApp from "../../../src/app/db";

// type Data = {
//   status: string;
//   result: any;
//   user: any;
//   token: any;
// };
type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(iniApp);

  res.status(200).json({ auth, provider });
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential?.accessToken;
  //     const user = result.user;

  //     res.status(200).json({ status: 'Login OK', result, user, token });
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     const email = error.email;
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     res.status(500).json({
  //       status: 'Login KO: ' + errorMessage,
  //       result: errorCode,
  //       user: email,
  //       token: credential,
  //     });
  //   });
}
