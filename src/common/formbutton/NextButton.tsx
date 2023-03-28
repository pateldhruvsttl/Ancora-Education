import React from 'react'
import './buttons.scss'
import IcnRight from '../../assets/icons/IcnRight'
interface title{
    title : string
}
function NextButton({title}:title) {
    return (
        <div className='next-button'>
            <button>{title}</button>
            <IcnRight />
        </div>
    )
}

export default NextButton