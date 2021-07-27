import React from 'react'
import './Sidebar.css'
import AddListingBtn from '../Buttons/AddListingBtn'
import NGU_Logo from '../../Media/Images/ngu-real-estate-logo.png'
import Leaderboard_Icon from '../../Media/SVG/leaderboard.svg'
import Agents_Icon from '../../Media/SVG/agents.svg'
import RELB_Logo from '../../Media/Images/relb-logo-sidebar.png'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='ngu-logo-section'>
                <img src={NGU_Logo} alt='Ngu Real Estate logo' id='ngu-logo-sidebar'></img>
            </div>
            <div className='sidebar-menus'>
                <a href="">
                    <div className='sidebar-menu-item'>
                    <img class='sidebar-icon' src={Leaderboard_Icon}></img>
                    Leaderboards
                </div>
                </a>
                <a href="">
                    <div className='sidebar-menu-item'>
                    <img class='sidebar-icon' src={Agents_Icon}></img>
                    Agents
                </div>
                </a>
            </div>
            <div id='listing-btn-sect'>
                < AddListingBtn />
            </div>
            <img id='relb-logo' src={RELB_Logo} alt='RELB logo'></img>
        </div>
    )
}


export default Sidebar