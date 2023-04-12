import React from 'react'
import NextButton from '../formbutton/NextButton'
import PreviousButton from '../formbutton/PreviousButton'
import './FundingPlan.scss'
import IcnPrint from '../../assets/icons/IcnPrint'

function GetFundingButton() {
    return (
        <div className='funding-buttons'>
            <div className='printFun-btn'>
                <IcnPrint width={10} height={10} />
                <button>{'Print Screen'}</button>
            </div>
            <div className='printbtn-right'>
                <PreviousButton title={'Previous Step'} />
                <NextButton title={'Next step: Enrollment Confirmation'} />
            </div>
        </div>
    )
}

export default GetFundingButton