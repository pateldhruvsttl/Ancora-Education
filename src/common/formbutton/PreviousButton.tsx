import React from 'react'
import './buttons.scss'
import IcnLeft from '../../assets/icons/IcnLeft'

interface title{
    title : string
}
function PreviousButton({title}:title) {
    return (
        <div className='previous-button'>
            <IcnLeft />
            <button>{title}</button>
        </div>
    )
}

export default PreviousButton