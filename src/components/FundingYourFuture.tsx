import React from 'react'
import './ComponentStyle.scss'
import '../common/profile/ProfileDetail.scss'
import ProfileHeading from '../common/profile/ProfileHeading'
import CommonParagraph from '../common/commonheading/CommonParagraph'
import FundingFutureCard from '../common/fundingyourfuture/FundingFutureCard'
import FinancialAid from '../common/fundingyourfuture/FinancialAid'
import CommonHeading from '../common/commonheading/CommonHeading'
import {
    heading, subDetail, cardData,
    fundingFutureTableData
} from '../common/fundingyourfuture/FundingCardData'
import PreviousButton from '../common/formbutton/PreviousButton'
import NextButton from '../common/formbutton/NextButton'

function FundingYourFuture() {
    return (
        <div className='profileDetai add-space-both'>
            <ProfileHeading {...heading} isBorder={false} />
            <CommonParagraph subDetail={subDetail} />
            <FundingFutureCard data={cardData} />
            <CommonHeading heading={{ heading: "Types of Financial Aid" }} />
            <FinancialAid data={fundingFutureTableData}/>
            <div className='buttons-cal'>
                <PreviousButton title={'Previous Step'} />
                <NextButton title={'Apply for Financial Aid'} />
            </div>
        </div>
    )
}

export default FundingYourFuture

