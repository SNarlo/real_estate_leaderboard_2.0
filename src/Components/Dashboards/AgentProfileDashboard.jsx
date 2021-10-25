import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";  
import AgentProfile from "../AgentsProfile/AgentsProfile";


const AgentProfileDashboard = ({userId}) => {


    const printUserId = () => {
        console.log(userId)
    }

    printUserId()

    return (
        <div>
            <Header />
            <Sidebar/>
            <AgentProfile 
            userId={userId}
            />
        </div>
    )
}

export default AgentProfileDashboard
