import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, 
    signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import  { Toaster } from 'react-hot-toast';
export const AuthContext = createContext();
export const auth = getAuth(app)


const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update a user's profile

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    };

    //user log out

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 
     //sing in with google
     const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
      }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        signInWithGoogle
    } 

    //using onAuthStateChanged to not lose the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe()
        }
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <Toaster />
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
