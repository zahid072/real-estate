import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [toasts, setToasts] = useState(false);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [loader, setLoader] = useState(true);

  const signUpUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(()=>{setToasts(true)})

  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const updateUserProfile = (name, photo) => {
    if(name && photo ){
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(()=>{
        setUser({displayName : name, photoURL : photo})
      })
    }else if(name){
      return updateProfile(auth.currentUser, {
        displayName: name,
      }).then(()=>{
        setUser({displayName : name, photoURL : photo})
      })
    }else{
      return updateProfile(auth.currentUser, {
        photoURL: photo,
      }).then(()=>{
        setUser({displayName : name, photoURL : photo})
      })
    }
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    toasts,
    setToasts,
    loader,
    signUpUsers,
    signInUsers,
    signInWithGoogle,
    signInWithGitHub,
    updateUserProfile,
    logOut,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
