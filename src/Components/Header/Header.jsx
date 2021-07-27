import './Header.css'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import Ellipsis from '../../Media/SVG/ellipsis.svg'
import Pencil from '../../Media/SVG/pencil.svg'
import Exit from '../../Media/SVG/exit.svg'


const DropdownEllipse = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle id='dropdown-toggle'>
                <img id='ellipse-img' src={Ellipsis} alt="menu ellipsis" />
            </Dropdown.Toggle>

            <Dropdown.Menu id='drop-down-menu'>
                <Dropdown.Item id='drop-down-item' href=""><img src={Pencil}></img>Edit Profile</Dropdown.Item> 
                <Dropdown.Item id='drop-down-item' href=""><img src={Exit}></img>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

const AgentInformation = (props) => {
    return (
        <div className='agent-information'>
            <div className='agent-details'>
                <a id='agent-name' href=''>{props.agentName}</a>
                <a id='agent-branch' href=''>{props.branch}</a>
            </div>
            <div id='agent-img'>
                <Image id='img' src={props.image} roundedCircle fluid/>
            </div>
            <div className='ellipsis-container'>
                < DropdownEllipse />
            </div>
        </div>
    )
}


const Header = (props) => {
    return (
        <header className='header'>
            <div className='profile-link-container'>
            <a id='profile-link' href=''>My Profile</a>
            </div>
            < AgentInformation agentName={props.agentName} branch={props.branch}/>
        </header>
    )
}

export default Header