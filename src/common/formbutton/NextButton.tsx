import React from 'react'
import './buttons.scss'
import IcnRight from '../../assets/icons/IcnRight'

function NextButton() {
    return (
        <div className='next-button'>
            <button>Personal Information</button>
            <IcnRight />
        </div>
    )
}

export default NextButton