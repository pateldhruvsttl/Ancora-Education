import React from 'react'
import EnrollIconwithLabel from './EnrollIconwithLabel'
import './Enrollment.scss'

type IconType = (props: any) => JSX.Element

interface props {
    IcnWhatsApp: IconType
    IcnChat: IconType
}
function EnrollIconsForOther({ IcnWhatsApp, IcnChat }: props) {
    return (
        <div className='enroll-right'>
            <EnrollIconwithLabel Icon={IcnWhatsApp} Label={"Call Us"} />
            <div className='enroll-vline' />
            <EnrollIconwithLabel Icon={IcnChat} Label={"Chat Now"} />
        </div>
    )
}

export default EnrollIconsForOther