/* eslint-disable react/prop-types */

import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../../Config/firebase.config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider() ; 
export const AuthContext = createContext();




const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true);

      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      }

      const SignIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }
      const signInWithGoogle = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }

      const signInWithFacebook = () => {
            setLoading(true) ; 
            return signInWithPopup(auth , facebookProvider)
      }

      const SignOut = () => {
            setLoading(true);
            return signOut(auth);
      }

      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      const resetPassword = (email) => {
            setLoading(true);
            return sendPasswordResetEmail(auth, email);
      }

      // StateChanged 

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
                  setLoading(false);
            })
            return () => {
                  return unsubscribe();
            }
      }, [])


      const AuthInfo = {

            loading,
            setLoading,
            user,
            createUser,
            SignIn,
            signInWithGoogle,
            signInWithFacebook,
            SignOut,
            updateUserProfile,
            resetPassword,

      }


      return (
            <AuthContext.Provider value={AuthInfo}>
                  {children}
            </AuthContext.Provider>
      )

}
export default AuthProvider;