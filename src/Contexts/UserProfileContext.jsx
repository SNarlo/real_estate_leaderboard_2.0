import React, {useContext, useState, useEffect} from "react";
import { getUserDetails } from "../Database/Dbfunctions";

const UserProfileContext = React.createContext()

export const useProfileContext = () => {
    return useContext(UserProfileContext)
} 

export const UserProfileProvider =({children}) => {
    const [userSelected, setUserSelected] = useState()

    const setUser = (id) => {
        const userDetails = getUserDetails(id)
        setUserSelected(userDetails)
    }

    const value = {
        userSelected,
        setUser
    }

    return (
        <UserProfileContext.Provider value={value}>
            {children}
        </UserProfileContext.Provider>
    )
}
