import React from 'react'
import ProfileHeading from '../profile/ProfileHeading'
import './Enrollment.scss'
import IcnChat from '../../assets/icons/IcnChat'
import IcnWhatsApp from '../../assets/icons/IcnWhatsApp'
import EnrollIconwithLabel from './EnrollIconwithLabel'
import EnrollIconsForMobile from './EnrollIconsForMobile'
import Dimention from '../../utils/Dimention'
import EnrollIconsForOther from './EnrollIconsForOther'

function EnrollHeaderContent() {
    const { width } = Dimention()
    return (
        <div className='enroll-header'>
            <ProfileHeading {...heading} />
            <div className='enroll-headingcal'>
                <div className='enroll-left'>
                    <p>{subDetail}</p>
                </div>
                {
                    width >= 481 ?
                        <EnrollIconsForOther IcnWhatsApp={IcnWhatsApp} IcnChat={IcnChat} />
                        :
                        <EnrollIconsForMobile IcnWhatsApp={IcnWhatsApp} IcnChat={IcnChat} />
                }
            </div>
            <div className='profile-hline' />
        </div>
    )
}

export default EnrollHeaderContent


const heading = {
    heading: 'Enrollment Documents',
}
const subDetail = 'To finish your registration, you will need to complete the documents listed below. All documents are required to be completed before your registration can be fully processed. Click the document name or the "Complete Document" button to complete each form.'