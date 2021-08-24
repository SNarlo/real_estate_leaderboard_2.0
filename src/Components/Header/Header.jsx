import './Header.css'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import Ellipsis from '../../Media/SVG/ellipsis.svg'
import Pencil from '../../Media/SVG/pencil.svg'
import Exit from '../../Media/SVG/exit.svg'
import { useState, useEffect } from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../firebase'


const Header = () => {

    const {currentUser, logOut} = useAuth()
    const [currentAgent, setCurrentAgent] = useState({})
    const [error, setError] = useState('')
    const history = useHistory()
    
    let usersDb = firebase.firestore().collection('users')


    // Retrieving the current user on page load
    useEffect(() => {
        usersDb.doc(currentUser.uid).get()
        .then(user => {
            if (!user.exists) {
                setError('No such user exists');
            }
            setCurrentAgent(user.data())
        })
    }, [])


    async function handleLogout() {
        setError('')
        try {
            await logOut()
            history.push('/login')
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <header className='header'>
            <div className='profile-link-container'>
            <a id='profile-link' href=''>My Profile</a>
            </div>
            <div className='agent-information'>
                <div className='agent-details'>
                    <a id='agent-name' href=''>{`${currentAgent.first_name} ${currentAgent.last_name}`}</a>
                    <a id='agent-branch' href=''>{currentAgent.branch}</a>
                </div>
                <div id='agent-img'>
                    <Image id='img' roundedCircle fluid/>
                </div>
                <div className='ellipsis-container'>
                    <Dropdown>
                    <Dropdown.Toggle id='dropdown-toggle'>
                        <img id='ellipse-img' src={Ellipsis} alt="menu ellipsis" />
                    </Dropdown.Toggle>
                        <Dropdown.Menu container='body' id='drop-down-menu'>
                            <Dropdown.Item id='drop-down-item' as={Link} to='/profile-settings'><img src={Pencil}></img>Profile Settings</Dropdown.Item>
                            <Dropdown.Item id='drop-down-item' onClick={() => handleLogout()}><img src={Exit}></img>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Header