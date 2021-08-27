const baseURL = 'https://api.rexsoftware.com'


// Sends a request to the Rex Api to login, it returns an authorisation token  
// which is used to perform authenticated requests
const getRexAuthToken = (emailVal, passwordVal, currentUser) => {

    fetch(`${baseURL}/v1/rex/Authentication/login`, {
        body: JSON.stringify({
            email : emailVal,
            password : passwordVal
        }),
        headers: {"Content-Type": "application/json"},
        method: "POST"
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        let authToken = data.result
        getUserListings(authToken, currentUser)
    })
}

// Gets the users rex account ID
const getUserProfileID = (authToken) => {
    fetch(`${baseURL}/v1/rex/UserProfile::getAccessibleAccounts`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${authToken}`},
        method: "POST"
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.result[0].account_id)
        return data.result.account_id
    })
}

// Gets all the listings which exist for the current user
const getUserListings = (authToken, currentUser) => {
    fetch(`${baseURL}/v1/rex/published-listings/search`, {
        body: JSON.stringify({
            criteria : [{
                name: "system_listing_state",
                type : "in",
                value : [
                    "sold"
                ]
            }
        ], 
            order_by: {
                "system_ctime": "desc"
            },
            limit: 20
        }),
        headers : {
            "Authorization" : `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        method: "POST"
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        for (let i = 0; i < data.result.rows.length; i++) {
            if (data.result.rows[i].listing_agent_1.email_address === currentUser.email) {
                console.log(data.result.rows[i])
            }
        }
        
    })
}


export {
    getRexAuthToken,
    getUserListings 
}

// itadmin@ngurealestate.com.au
// 5!5Xhba@*Bjb