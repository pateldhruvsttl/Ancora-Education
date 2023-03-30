import React from 'react'
import ProfileHeading from '../common/profile/ProfileHeading'
import './ComponentStyle.scss'
import CommonInformation from '../common/profileconfirmation/CommonInformation'

function ProfileConfirmation() {
    return (
        <div className='profileDetai'>
            <ProfileHeading {...heading} />
            <CommonInformation /> 
        </div>
    )
}

export default ProfileConfirmation
const heading = {
    heading: 'Profile Confirmation',
    subDetail: 'Please carefully review the information you provided below. If you find incorrect information, click the edit button to update. When complete, click the confirm button at the bottom of this page to continue.'
  }