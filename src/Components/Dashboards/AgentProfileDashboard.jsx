import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";  
import AgentProfile from "../AgentsProfile/AgentsProfile";


const AgentProfileDashboard = () => {

    return (
        <div>
            <Header />
            <Sidebar/>
            <AgentProfile/>
        </div>
    )
}

export default AgentProfileDashboard
