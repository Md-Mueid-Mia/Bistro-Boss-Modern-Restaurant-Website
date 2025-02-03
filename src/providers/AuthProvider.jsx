import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn= ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const facebookSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }
    const githubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const signOutUser = () => {
        setLoading(true)
       return signOut(auth)
    

    }
    const updateUserProfile = (name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        facebookSignIn,
        githubSignIn,
        // Add more methods as needed
        createUser,
        signIn,
        signOutUser,
        updateUserProfile,
        googleSignIn,
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser?.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;