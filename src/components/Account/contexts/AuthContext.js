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
import UserDataService from "../../../Http/Userdataservie"

const AuthContext = React.createContext()
let newuser = {};
let date = new Date()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const history = useHistory();
  const alert = useAlert();;

  async function signup(email, password) {
   return await createUserWithEmailAndPassword(auth, email, password).then((res) => {
    newuser["user"] = auth.currentUser;
    console.log(auth.currentUser.email)
    localStorage.setItem("uid", auth.currentUser.uid)
    newuser["creationdate"] = date + "";
    console.log(newuser);
      Create_user_order_account(newuser)
   });
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {console.log(res); alert.show('Logged in Successfully'); newuser["user"] = auth.currentUser;
      localStorage.setItem("uid", auth.currentUser.uid)
      newuser["creationdate"] = date + "";
      Create_user_order_account(newuser)
      console.log(newuser);
    })
      .catch((err) => {console.log(err); alert.show('Failed to log in')})
      .finally(() => history.push("/Products"))
      
  };

  const Create_user_order_account = (user) => {
    UserDataService.createUser(user).then((res) => {
      console.log(res);
    }).catch((err) => {
      alert.show(err)
    } )
  }

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
