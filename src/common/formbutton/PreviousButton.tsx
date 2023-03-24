import React from 'react'
import './buttons.scss'
import IcnLeft from '../../assets/icons/IcnLeft'


function PreviousButton() {
    return (
        <div className='previous-button'>
            <IcnLeft />
            <button>Previous Step</button>
        </div>
    )
}

export default PreviousButton