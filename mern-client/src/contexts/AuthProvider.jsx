import React, { useEffect } from 'react'
import { useState, createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {    
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
       createUser,
        loginWithGoogle,
        loading,
        login,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider