
const baseURL = 'https://api.rexsoftware.com'

// Sends a request to the Rex Api to login, it returns an authorisation token  
// which is used to perform authenticated requests
const getRexAuthToken = (emailVal, passwordVal) => {
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
        return data.result
    })
}


export {
    getRexAuthToken, 
}

// itadmin@ngurealestate.com.au
// 5!5Xhba@*Bjb