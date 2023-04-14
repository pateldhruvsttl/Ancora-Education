import React from 'react'
import './FundingMyFutureStyle.scss'

interface props {
    placeholder?: string
    isColor?: string
}
function MyFutureDropDown({ placeholder, isColor }: props) {
    return (
        <select style={{ color: isColor && isColor }} id="inputState" >
            <option selected>{placeholder}</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    )
}

export default MyFutureDropDown