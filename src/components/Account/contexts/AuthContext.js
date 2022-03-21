import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase";
import { useAlert } from 'react-alert'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  
} from "firebase/auth";
import { Link, useHistory } from "react-router-dom"

const AuthContext = React.createContext()


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const history = useHistory();
  const alert = useAlert();;

  function signup(email, password) {
   return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {console.log(res); alert.show('Logged in Successfully')})
      .catch((err) => {console.log(err); alert.show('Failed to log in')})
      .finally(() => history.push("/Products"))
      
  };

  function login(email, password) {
    return signInWithEmailAndPassword(auth,email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEemail(email) {
    return updateEmail(email)
  }

  function updatePaassword(password) {
    return updatePassword(currentUser, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEemail,
    updatePaassword,
    signInWithGoogle
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
