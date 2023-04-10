import React from 'react'
import CommonParagraph from '../commonheading/CommonParagraph'
import './input.scss'

interface detail {
    detail?: {
        selectOne?: string
        selectTwo?: string
    }
}
function RadioButton({ detail }: detail) {
    console.log(detail?.selectOne);

    return (
        <div className='radio-cal'>
            <div className="wrapper-class">
                <input type="radio" id="radio1" />
                <label htmlFor="radio1">{detail?.selectOne}</label>
            </div>
            <div className="wrapper-class">
                <input type="radio" id="radio1" />
                <label htmlFor="radio1">{detail?.selectTwo}</label>
            </div>
            <div className='profile-hline bottomspace' />
        </div>
    )
}

export default RadioButton