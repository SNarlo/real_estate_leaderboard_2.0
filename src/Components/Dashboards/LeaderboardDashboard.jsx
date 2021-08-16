import React, {useState} from 'react'
import { AddSaleModalForm } from '../Forms/AddSaleModalForm'
import Header from '../Header/Header'
import Leaderboard from '../Leaderboard/Leaderboard'
import Sidebar from '../Sidebar/Sidebar'

export const LeaderboardDashboard = () => {
    
    const [showSalesModal, setShowSalesModal] = useState(false)

    const closeSalesModal = () => setShowSalesModal(false)


    return (
        <>
            <Header />
            <Leaderboard />
            <AddSaleModalForm />
            <Sidebar click={() => setShowSalesModal(true)}/>
            <AddSaleModalForm show={showSalesModal}/>
        </>
    )
}
