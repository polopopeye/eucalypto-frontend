import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginEmail = async (email: string, password: string) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(
        "🚀 ~ file: loginEmail.ts ~ line 7 ~ .then ~ userCredential",
        userCredential
      );
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: loginEmail.ts ~ line 11 ~ loginEmail ~ error",
        error
      );
      const errorCode = error.code;
      const errorMessage = error.message;
      return "errorMessage";
    });

  // la idea es actualizar a redux los datos obtenidos del usuario
};

export default loginEmail;
