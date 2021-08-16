import React, { useState } from 'react'
import './Sidebar.css'
import AddSaleBtn from '../Buttons/AddSaleBtn'
import NGU_Logo from '../../Media/Images/ngu-real-estate-logo.png'
import Leaderboard_Icon from '../../Media/SVG/leaderboard.svg'
import Agents_Icon from '../../Media/SVG/agents.svg'
import RELB_Logo from '../../Media/Images/relb-logo-sidebar.png'
import { Link } from 'react-router-dom'

const Sidebar = ({click}) => {

    return (
        <div className="sidebar">
            <div className='ngu-logo-section'>
                <img src={NGU_Logo} alt='Ngu Real Estate logo' id='ngu-logo-sidebar'></img>
            </div>
            <div className='sidebar-menus'>
                <Link to='/'>
                    <div className='sidebar-menu-item'>
                    <img className='sidebar-icon' src={Leaderboard_Icon}></img>
                    Leaderboards
                </div>
                </Link>
                <a href="">
                    <div className='sidebar-menu-item'>
                    <img className='sidebar-icon' src={Agents_Icon}></img>
                    Agents
                </div>
                </a>
            </div>
            <div id='listing-btn-sect'>
                < AddSaleBtn click={click}/>
            </div>
            <img id='relb-logo' src={RELB_Logo} alt='RELB logo'></img>
            <div className='sidebar-overlay'></div>
        </div>
    )
}


export default Sidebar