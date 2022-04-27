import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

// uid: '',
// email: '',
// emailVerified: false,
// isAnonymous: false,
// providerData: [
//   {
//     providerId: 'password',
//     uid: 'kenneth7e7a@gmail.com',
//     displayName: null,
//     email: 'kenneth7e7a@gmail.com',
//     phoneNumber: null,
//     photoURL: null,
//   },
// ],
// stsTokenManager: {
//   refreshToken: '',
//   accessToken: '',
//   expirationTime: '',
// },
// createdAt: '',
// lastLoginAt: '',
// apiKey: '',
// appName: '',

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setData: (state, action) => {
      return (state = action.payload);
    },
    check: (state) => {
      getAuth().onAuthStateChanged((user) => {
        if (user) return (state = user);

        return (state = {});
      });
    },
  },
});

export default userSlice;
