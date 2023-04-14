import React from 'react'
import './ComponentStyle.scss'
import '../common/profile/ProfileDetail.scss'
import ProfileHeading from '../common/profile/ProfileHeading'
import FundingMyFutureTable from '../common/fundingmyfuture/FundingMyFutureTable'
import GetFundingButton from '../common/myfundingplan/GetFundingButton'

function FundingMyEducation() {
    return (
        <div className='profileDetai add-space-both'>
            <ProfileHeading {...heading} isBorder={false} />
            <FundingMyFutureTable />
            <GetFundingButton />
        </div>
    )
}

export default FundingMyEducation

const heading = { heading: 'How Am I Funding My Education?' }