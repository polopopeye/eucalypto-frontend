import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const registerEmail = (email: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(
        "🚀 ~ file: registerEmail.ts ~ line 6 ~ .then ~ userCredential",
        userCredential
      );
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log("🚀 ~ file: registerEmail.ts ~ line 12 ~ error", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export default registerEmail;
