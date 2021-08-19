import firebase from "firebase";

const createUserInDb = (user, firstName, lastName, branch) => {
    const userUid = user.uid
    
    const userAccount = {
        agentId: userUid,
        first_name : firstName,
        last_name : lastName,
        branch: branch, 
        sales: {},
        sales_total : 0
    }
    firebase.firestore().collection('users').doc(userUid).set(userAccount)
}

const createListingForUser = (user) => {
    
}


export {createUserInDb,
        createListingForUser}