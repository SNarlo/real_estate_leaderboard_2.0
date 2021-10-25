import React, { useEffect, useState } from 'react'
import './Leaderboard.css'
import LeftTriangle from '../../Media/SVG/left-triangle.svg'
import RightTriangle from '../../Media/SVG/right-triangle.svg'
import firebase from '../../firebase'
import { Link } from 'react-router-dom'
import { useProfileContext } from '../../Contexts/UserProfileContext'


const LeaderCard = (props) => {

    const { setUser } = useProfileContext()

    const handleProfileSelection = async (e) => {
        await setUser(e.target.id)
    }

    return (
        <div className='leaderboard-card' id={props.position}>
            <hr />
            <div className='inner-container'>
                <span className='position'>{props.number}</span>
                <div className='agent-info-container'>
                    <Link onClick={handleProfileSelection} id={props.id} className='agent-name' to={{pathname: '/agent-profile-dashboard', state: {userId : props.id}}}>{props.agent_name}</Link> 
                    <h3 id='agent-branch'>{props.branch_name}</h3>
                    <h2 id='sales-total'>{props.sales_total_figure}</h2>
                    <p id='total-sales'>({props.total_sales})</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

const NonLeaderCard = (props) => { //need to fetch database data and map to tr

    const { setUser } = useProfileContext()


    const handleProfileSelection = async (e) => {
        await setUser(e.target.id)
    }

    return (
        <tr className='leaderboard-row'>
            <td className='leaderboard-cell'>
                <span className='non-leader-pos'>{props.position}</span>
            </td>
            <td className='leaderboard-cell'>
                <Link onClick={handleProfileSelection} id={props.id} className='non-leader-name' to={{pathname: '/agent-profile-dashboard', state: {userId : props.id}}}>{props.name}</Link>
            </td>
            <td className='leaderboard-cell'>
                <h3 id='branch'>{props.branch}</h3>
            </td>
            <td id='sales-cell' className='leaderboard-cell'>
                <h3>{props.saletotal}</h3>
                <p>{props.sales}</p>
            </td>
        </tr>
    )
}


const Leaderboard = () => {
    const [users, setUsers] = useState([])
    const [fourthOnward, setFourthOnward] = useState([])
    const [loading, setLoading] = useState(false)

    const ref = firebase.firestore().collection("users").orderBy('sales_total', 'desc')    
    
    function getUsers() {
        setLoading(true)

        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setUsers(items)

            if (items.length > 3) {
                const nonTopUsers = [] // adding fourth onward users
                for (let i = 3; i < items.length; i++) {
                    nonTopUsers.push(items[i])
                }
                setFourthOnward(nonTopUsers);
            }
            setLoading(false)
        });
    }

    useEffect(() => {
        getUsers();
    }, [])

    if (loading) {
        return (
            <div className='spinner-container'>
                <div className='spinner'></div>
            </div> 
        )
    }

    return (
        <div className='leaderboard'>
            <section id='top-agents-section'>
                <h1 id='leaderboard-title'>Sales Leaderboard</h1>
                <div id='leader-cards-container'>
                    {users.slice(1, 2).map(user =>
                        <LeaderCard 
                        key = {user.agentId}
                        id = {user.agentId}
                        agent_name = {`${user.first_name} ${user.last_name}`}
                        position= 'second'
                        number='2' 
                        branch_name= {user.branch}
                        />)}

                    {users.slice(0, 1).map(user =>
                        <LeaderCard 
                        key = {user.agentId}
                        id = {user.agentId}
                        agent_name = {`${user.first_name} ${user.last_name}`}
                        position= 'first'
                        number='1' 
                        branch_name= {user.branch}
                        />)}

                    {users.slice(2, 3).map(user =>
                        <LeaderCard 
                        key = {user.agentId}
                        id = {user.agentId}
                        agent_name = {`${user.first_name} ${user.last_name}`}
                        position= 'third'
                        number='3' 
                        branch_name= {user.branch}
                        />)}
                </div>
            <div className='svg-triangle-elements'>
                <img id='left-triangle' src={LeftTriangle}/>
            </div>
            </section>   
            <div className='table-section'>
                <table id='table'>
                    <thead>
                        <tr id='title-row'>
                            <th>Pos.</th>
                            <th>Name</th>
                            <th>Branch</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                            {fourthOnward.map(user => < NonLeaderCard 
                            key = {user.agentId}
                            id = {user.agentId}
                            position = {fourthOnward.indexOf(user) + 4}
                            name = {`${user.first_name} ${user.last_name}`} 
                            branch = {user.branch}
                        />)}
                    </tbody>
                </table>
            </div>
            
            
        </div>
    )
}

export default Leaderboard;