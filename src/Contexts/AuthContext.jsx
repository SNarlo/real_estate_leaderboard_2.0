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
            console.log(user)
            createUserInDb(user.user, firstName, lastName, branch)
        })
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
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
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
