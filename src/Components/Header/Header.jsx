import './Header.css'
import Image from 'react-bootstrap/Image'
import Ellipsis from '../../Media/SVG/ellipsis.svg'

const AgentInformation = (props) => {
    return (
        <div className='agent-information'>
            <div className='agent-details'>
                <p>{props.agentName}</p>
                <br></br>
                <p>{props.branch}</p>
            </div>
            <div className='agent-img'>
                <Image src='holder.js/171x180' roundedCircle fluid/>
            </div>
            <div className='ellipsis-container'>
                <img src={Ellipsis} alt="menu ellipsis" />
            </div>
        </div>
    )

}


const Header = (props) => {
    return (
        <header className='header'>
            <a id='profile-link' href=''>My Profile</a>
            < AgentInformation agentName={props.agentName} branch={props.branch}/>
        </header>
    )
}

export default Header