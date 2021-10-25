import './AgentsProfile.css'
import React, { useState, useEffect} from "react"
import LeftTriangle from '../../Media/SVG/left-triangle.svg'
import RightTriangle from '../../Media/SVG/right-triangle.svg'
import { useProfileContext } from '../../Contexts/UserProfileContext'


// Loads the user clicked on, and their respective profile

const AgentProfile = () => {

    const { userSelected } = useProfileContext()

    useEffect( async () => {
        await console.log(userSelected)
    }, [])

    return (
        <div className='agents-profile'>
            <section id='agent-profile-section'>
                <div className='svg-triangle-elements'>
                    <img id='left-triangle' src={LeftTriangle}/>
                    <img id='right-triangle' src={RightTriangle}/>
                </div>
            </section>

        </div>
    )
    
}

export default AgentProfile