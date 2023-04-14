import React from 'react'
import MyFutureDropDown from './MyFutureDropDown'
import './FundingMyFutureStyle.scss'

interface props {
    placeholder?: string
    heading?: string
}
export default function MyFutureSubFileForTab({ placeholder, heading }: props) {
    return (
        <>
            <div className='myfuture-boxtab'>
                <MyFutureDropDown placeholder={placeholder} />
                {
                    heading === 'Scholarships' &&
                    <MyFutureDropDown placeholder='Scholarship Frequency' isColor={"#d7d7d7"} />
                }

            </div>
            {heading === 'Cash Contribution' && <p>Maximum Monthly Contribution</p>}
        </>
    )
}
