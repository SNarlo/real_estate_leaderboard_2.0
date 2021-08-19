import './AgentsMenu.css'
import Gavel from '../../Media/SVG/sold-gavel.svg'

import React from 'react'

const agentProfileCell = (props) => {
    return (
        <tr className='agents-row'>
            <td className='agent-cell'>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </td>
            <td>
                <img src={Gavel} class='sold-icon'></img>
                <p class='sold-total'>{props.sales_total}</p>
            </td>
            <td className='agent-cell'>
                <h3 id='branch'>{props.branch}</h3>
            </td>
        </tr>
    )
}


export const AgentsMenu = () => {
    return (
        <>
            <h1>Agents</h1>
            
        </>
    )
}
