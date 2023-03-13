import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../fireBase/fireBase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user,Setuser]=useState(null)

  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signin = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        Setuser(currentUser)
    });
    return()=>unsubscribe();
  },[])

  const authInfo = {
    createUser,
    signin,
    logOut,
    user
  }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
