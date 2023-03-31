import React from 'react'
import ProfileHeading from '../common/profile/ProfileHeading'
import './ComponentStyle.scss'
import CommonInformation from '../common/profileconfirmation/CommonInformation'
import {
    contactInformation, personalInformation, militaryBackground,
    educationBackground, programSelection, programPreferences
}
    from '../common/profileconfirmation/ProfileConfirmationData'
import PreviousButton from '../common/formbutton/PreviousButton'
import NextButton from '../common/formbutton/NextButton'
import '../common/profile/ProfileDetail.scss'

function ProfileConfirmation() {
    return (
        <div className='profileDetai add-space-both'>
            <ProfileHeading {...heading} />
            <CommonInformation data={contactInformation} heading={"Contact Information"} />
            <CommonInformation data={personalInformation} heading={"Personal Information"} />
            <CommonInformation data={militaryBackground} heading={"Military Background"} />
            <CommonInformation data={educationBackground} heading={"Education Background"} />
            <CommonInformation data={programSelection} heading={"Program Selection"} />
            <CommonInformation data={programPreferences} heading={"Program Preferences"} />
            <div className='buttons-cal'>
                <PreviousButton title={'Previous Step'} />
                <NextButton title={'Confirm'} />
            </div>
        </div>
    )
}

export default ProfileConfirmation
const heading = {
    heading: 'Profile Confirmation',
    subDetail: 'Please carefully review the information you provided below. If you find incorrect information, click the edit button to update. When complete, click the confirm button at the bottom of this page to continue.'
}


