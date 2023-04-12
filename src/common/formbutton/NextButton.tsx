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
            <IcnRight width={10} height={10}/>
        </div>
    )
}

export default NextButton