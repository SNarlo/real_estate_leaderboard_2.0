import React, {useContext, useState, useEffect} from 'react'
import { createUserInDb } from '../Database/Dbfunctions';
import {auth} from '../firebase'

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password, firstName, lastName, branch) => {
        return auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            createUserInDb(user.user, firstName, lastName, branch)
        })
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logOut = () => {
        return auth.signOut()
    }

    const forgotPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
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
        logOut,
        forgotPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
