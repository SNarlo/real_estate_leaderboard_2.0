import firebase from "firebase";

// Creates a user in the firestore db with the same uid as the authentication uid
const createUserInDb = (user, firstName, lastName, branch) => {
    const userUid = user.uid
    
    const userAccount = {
        agentId: userUid,
        first_name : firstName,
        last_name : lastName,
        branch: branch
    }
    firebase.firestore().collection('users').doc(userUid).set(userAccount)
}

// Creates a listing for a user in the listings collection only if it doesn't already exist
const createListingForUser = (user, listing) => {
    const userUid = user.uid
    const listingId = listing.id

    const agentListing = {
        listingId : listingId,
        agentId : userUid,
        address : listing.address,
        attributes : listing.attributes,
        sale_price : listing.state_value_price,
        listing_agent_1 : listing.listing_agent_1,
        listing_agent_2 : listing.listing_agent_2,
        sold_date : listing.state_date,
        property_category : listing.property_category
    }
    firebase.firestore().collection('listings').doc(listingId).set(agentListing, {merge : true})
}


export {
    createUserInDb,
    createListingForUser
}   