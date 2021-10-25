import './AgentsProfile.css'
import React, { useState, useEffect} from "react"
import LeftTriangle from '../../Media/SVG/left-triangle.svg'
import RightTriangle from '../../Media/SVG/right-triangle.svg'
import { getUserListingsFromDb, getUserDetails } from "../../Database/Dbfunctions"


// Loads the user clicked on, and their respective profile

const AgentProfile = (props) => {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        console.log(props.userId)
        getUserDetails(props.userId) 
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