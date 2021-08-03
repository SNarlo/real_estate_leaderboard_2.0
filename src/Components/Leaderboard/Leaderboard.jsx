import { useEffect, useState } from 'react'
import './Leaderboard.css'
import John from '../../Media/Images/John-Stevenson.png'
import firebase from '../../firebase'


const LeaderCard = (props) => {
    return (
        <div className='leaderboard-card' id={props.position}>
            <hr />
            <div className='inner-container'>
                <span className='position'>{props.number}</span>
                <div className='agent-info-container'>
                    <img id='agent-photo' src={props.profile_img}></img>
                    <h2 id='agent-name'>{props.agent_name}</h2>
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
    return (
        <tr className='leaderboard-row'>
            <td className='leaderboard-cell'>
                <span className='non-leader-pos'>{props.position}</span>
            </td>
            <td className='leaderboard-cell'>
                <img className='agent-profile' src={props.img}></img>
            </td>
            <td className='leaderboard-cell'>
                <h3>{props.name}</h3>
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

    const ref = firebase.firestore().collection("users")



    function getUsers() {
        setLoading(true)
        ref.orderBy('sales_total', 'desc') // order in order of sales
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })

            setUsers(items)
            console.log(users)

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
        return <h1>Loading...</h1>
    }

    return (
        <div className='leaderboard'>
            <section id='top-agents-section'>
                <h1 id='leaderboard-title'>Sales Leaderboard</h1>
                <div id='leader-cards-container'>
                    <LeaderCard position='second' number='2' />
                    <LeaderCard 
                    profile_img= {John}
                    name = 'John'
                    position= 'first'
                    number='1' 
                    branch_name='Toowong' 
                    sales_total_figure='$18,760,980' 
                    total_sales='16' />
                    <LeaderCard position='third' number='3'/>
                </div>
            </section>   
            <div className='table-section'>
                <table id='table'>
                    <tr id='title-row'>
                        <th>Pos.</th>
                        <th></th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Total</th>
                    </tr>
                    {fourthOnward.map(user => < NonLeaderCard 
                        key = {user.id}
                        position = {fourthOnward.indexOf(user) + 4}
                        img = {John}
                        name = {user.first_name + ' ' + user.last_name} 
                        branch = {user.branch}
                        saletotal = {user.sales_total} 
                        sales = {user.sales}
                    />)}
                </table>
            </div>
            
            
        </div>
    )
}

export default Leaderboard;