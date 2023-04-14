import React from 'react'
import Dimention from '../../utils/Dimention'
import './FundingMyFutureStyle.scss'
import MyFutureDropDown from './MyFutureDropDown'
import MyFutureSubFileForTab from './MyFutureSubFileForTab'

interface props {
    data: {
        heading?: string
        content?: string
        placeholder?: string
    }
}
function MyFutureSubFile({ data }: props) {
    const { heading, content, placeholder } = data
    const { width } = Dimention()
    return (
        <div className='myFuture-box'>
            <h6>{heading}</h6>
            <div className='myfuture-rightcal'>
                <p className='left-myfuturecal'>{content}</p>
                <div className='myfuture-select'>
                    {
                        width >= 481 && width <= 800
                            ?
                            <MyFutureSubFileForTab placeholder={placeholder} heading={heading}/>
                            :
                            <>
                                <MyFutureDropDown placeholder={placeholder} />
                                {heading === 'Scholarships' &&
                                    <MyFutureDropDown placeholder='Scholarship Frequency' isColor={"#d7d7d7"} />}

                                {heading === 'Cash Contribution' && <p>Maximum Monthly Contribution</p>}
                            </>

                    }
                </div>
            </div>
        </div>
    )
}

export default MyFutureSubFile