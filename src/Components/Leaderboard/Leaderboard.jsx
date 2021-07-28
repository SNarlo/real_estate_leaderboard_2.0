import './Leaderboard.css'
import John from '../../Media/Images/John-Stevenson.png'

const LeaderCard = (props) => {
    return (
        <div class='leaderboard-card' id={props.position}>
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
        <tr>
            
        </tr>
    )
}


const Leaderboard = (props) => {
    return (
        <div className='leaderboard'>
            <section id='top-agents-section'>
                <h1 id='leaderboard-title'>Sales Leaderboard</h1>
                <div id='leader-cards-container'>
                    <LeaderCard position='second' number='2' />
                    <LeaderCard 
                    profile_img={John}
                    position='first' 
                    number='1' 
                    agent_name='John Stevenson' 
                    branch_name='Toowong' 
                    sales_total_figure='$18,760,980' 
                    total_sales='16' />
                    <LeaderCard position='third' number='3'/>
                </div>
            </section>   
            <div className='table-section'>
                <table>
                    <tr id='title-row'>
                        <th>Pos.</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Total</th>
                    </tr>
                </table>
                <hr id='table-top-divider'></hr>
            </div>
        </div>
    )
}

export default Leaderboard;