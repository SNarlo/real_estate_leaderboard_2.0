import firebase from "firebase";
import { doc, getDoc} from "firebase/firestore"


// Creates a user in the firestore db with the same uid as the authentication uid
const createUserInDb = (user, firstName, lastName, branch) => {
    const userUid = user.uid
    
    const userAccount = {
        agentId: userUid,
        first_name : firstName,
        last_name : lastName,
        branch: branch
    }
    firebase.firestore().collection("users").doc(userUid).set(userAccount)
}

// Creates a listing for a user in the listings collection only if it doesn't already exist
const createListingForUser = (user, listing) => {
    const userUid = user.uid
    const listingId = listing.id

    const agentListing = {
        listingId : listingId,
        agentId : userUid,
        eTag: listing.etag,
        address : listing.address,
        attributes : listing.attributes,
        sale_price : listing.state_value_price,
        listing_agent_1 : listing.listing_agent_1,
        listing_agent_2 : listing.listing_agent_2,
        sold_date : listing.state_date,
        property_category : listing.property_category
    }
    firebase.firestore().collection("listings").doc().set(agentListing, {merge : true})
}

// Retrieve all listings for an agent with a specific agentId 
const getUserListingsFromDb = async (agentId) => {
    const listingsDocRef = firebase.firestore().collection("listings")
    const snapshot = await listingsDocRef.where('agentId', '==', agentId).get()

    if(snapshot.empty) {
        console.log('No matching documents')
        return
    } 
    return snapshot
}

const getUserDetails = async (agentId) => {
    const usersRef = firebase.firestore().collection("users").doc(agentId)
    const doc = await usersRef.get()

    if(!doc.exists) {
        console.log('No such document exists')
    } else {
        return doc.data()
    }
}

export {
    createUserInDb,
    createListingForUser,
    getUserListingsFromDb,
    getUserDetails
}   