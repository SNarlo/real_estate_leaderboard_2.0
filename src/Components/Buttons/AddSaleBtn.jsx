import Plus_Icon from '../../Media/SVG/plus-icon.svg'
import React from 'react'
import './AddSaleBtn.css'

const AddSaleBtn = ({click}) => {
    return (
        <button onClick={click} id='add-a-listing-btn'>
            <span id='plus-icon-span'><img id='plus-icon' src={Plus_Icon} alt='plus icon' /></span>
            <span id='add-listing-text'>Add a Sale</span>
        </button>
    )
}

export default AddSaleBtn