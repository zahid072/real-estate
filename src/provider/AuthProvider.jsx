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
  const [user, setUser] = useState(null);
  const [navLoader, setNavLoader] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [loader, setLoader] = useState(true);

  const signUpUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const updateUserProfile = (name, photo, Email) => {
    if (name && photo) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      }).then(() => {
        setUser({ displayName: name, photoURL: photo, email: Email });
      });
    } else if (name) {
      return updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        setUser({ displayName: name, photoURL: photo });
      });
    } else {
      return updateProfile(auth.currentUser, {
        photoURL: photo,
      }).then(() => {
        setUser({ displayName: name, photoURL: photo });
      });
    }
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    setNavLoader(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setNavLoader(false)
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
    navLoader,
    signInUsers,
    signUpUsers,
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
