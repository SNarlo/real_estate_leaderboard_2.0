import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import ProfileSettingsPage from '../ProfileSettingsPage/ProfileSettingsPage'

const ProfileSettingsDashboard = () => {
    return (
        <div>
            <Header />
            <ProfileSettingsPage />
            <Sidebar/>
        </div>
    )
}

export default ProfileSettingsDashboard


