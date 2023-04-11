import React from 'react'
import EnrollIconwithLabel from './EnrollIconwithLabel'
import './Enrollment.scss'

type IconType = (props: any) => JSX.Element

interface props {
    IcnWhatsApp: IconType
    IcnChat: IconType
}
function EnrollIconsForMobile({ IcnWhatsApp, IcnChat }: props) {
    return (
        <div className='enroll-right enrollmobile-right'>
            <EnrollIconwithLabel Icon={IcnWhatsApp} Label={"Call Us"} isMobile={true}/>
            <div className='enroll-vline' />
            <EnrollIconwithLabel Icon={IcnChat} Label={"Chat Now"} isMobile={true}/>
        </div>
    )
}

export default EnrollIconsForMobile