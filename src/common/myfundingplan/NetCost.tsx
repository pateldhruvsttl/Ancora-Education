import React from 'react'
import './FundingPlan.scss'

function NetCost() {
    return (
        <>
            <div className='funding-netcost'>
                <div><span>Net Cost=</span><span>difference between the total COA and all grant/scholarship aid received</span></div>
                <div className='fund-netValue'><span>$55,516.00</span></div>
            </div>
            <div className='funding-footerTxt'>
                <p>Anticipated disbursement dates are at the end of add/drop after the term begin date or 30 days after the beginning of the term start date for first time borrowers Awards are contingent upon anticipated annual renewal of funding from federal, state, and private sources.

                </p>
                <p>Awards are based on the information you reported on your Free Application for Federal Student Aid.

                </p>
                <p>Eligibility for these awards may change if new information is received; including information we may receive with regard to your Satisfactory Academic Progress.
                </p>
                <p>
                    If you know that you will be receiving any financial aid resources not listed on your Financial Aid Funding Plan, you must report each resource and the amount of the resource to the Financial Service Center.
                </p>
                <p>Miller-Motte reserves the right to adjust your awards.</p>
            </div>
            <div className='profile-hline' />
        </>
    )
}

export default NetCost
