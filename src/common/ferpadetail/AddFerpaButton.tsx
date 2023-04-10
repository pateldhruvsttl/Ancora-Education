import React from 'react'
import './Ferpa.scss'
import IcnPlusCircle from '../../assets/icons/IcnPlusCircle'

function AddFerpaButton() {
    return (
        <div className='enrollBtn-cal'>
            <div className='enroll-plus'><IcnPlusCircle/></div>
            <button>Add More</button>
        </div>
    )
}

export default AddFerpaButton