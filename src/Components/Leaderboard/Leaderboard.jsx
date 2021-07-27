import './Leaderboard.css'
import John from '../../Media/Images/John-Stevenson.png'

const LeaderCard = (props) => {
    return (
        <div class='leaderboard-card' id={props.position}>
            <hr />
            <div className='inner-container'>
                <span class='position'>{props.number}</span>
                <img src={props.profile_img}></img>
                <h2 id='agent-name'>{props.agent_name}</h2>
                <h3 id='agent-branch'>{props.branch_name}</h3>
                <h2 id='sales-total'>{props.sales_total_figure}</h2>
                <p id='total-sales'>{props.total_sales}</p>
            </div>
            <hr />
        </div>
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
        </div>
    )
}

export default Leaderboard;