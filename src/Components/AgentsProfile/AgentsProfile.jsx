import './AgentsProfile.css'
import React, { useState, useEffect} from "react"
import LeftTriangle from '../../Media/SVG/left-triangle.svg'
import RightTriangle from '../../Media/SVG/right-triangle.svg'
import { useProfileContext } from '../../Contexts/UserProfileContext'
import DollarSign from '../../Media/SVG/dollar-sign.svg'
import SoldGavel from '../../Media/SVG/sold-gavel.svg'


// Loads the user clicked on, and their respective profile

const AgentProfile = () => {

    const { userSelected } = useProfileContext()
    const [userDetails, setUserDetails] = useState()
    const [userName, setUserName] = useState('')


    useEffect( async () => {
        await userSelected
        .then(user => {
            setUserDetails(user)
            setUserName(`${user.first_name} ${user.last_name}`)
        })
        return userDetails, userName
    }, [])

    return (
        <div className='agents-profile'>
            <section id='agent-profile-section'>
                <div className='user-info'>
                    <h1>{userName}</h1>
                </div>
                <div className='svg-triangle-elements'>
                    <img id='left-triangle' src={LeftTriangle}/>
                </div>
            </section>

        </div>
    )
    
}

export default AgentProfile