import Plus_Icon from '../../Media/SVG/plus-icon.svg'
import React from 'react'
import './AddListingBtn.css'

const AddListingBtn = () => {
    return (
        <button onClick='' id='add-a-listing-btn'>
            <span id='plus-icon-span'><img id='plus-icon' src={Plus_Icon} alt='plus icon' /></span>
            <span id='add-listing-text'>Add a Listing</span>
        </button>
    )
}

export default AddListingBtn