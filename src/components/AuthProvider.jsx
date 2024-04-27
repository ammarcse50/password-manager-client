import React, { createContext, useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { child } from "firebase/database";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // create user
  const [user, setUser] = useState(null);
   const [loading,setLoading] = useState(true)




  const signUpUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = ()=>{
    setLoading(true)

     return signOut(auth);

  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('Current value of the current user', currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
        unSubscribe();
    }
}, [])



  const authInfo = {
    signUpUser,
    
      loading,

    signInUser,
    logOut,

     user
  };

  return <AuthContext.Provider value={authInfo}>

    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
