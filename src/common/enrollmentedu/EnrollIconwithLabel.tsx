import React from 'react'
import './Enrollment.scss'

type IconType = (props: any) => JSX.Element

interface props {
    Icon: IconType
    Label?: string
    isMobile?: boolean
}
function EnrollIconwithLabel({ Icon, Label, isMobile }: props) {
    return (
        <div className={isMobile ? 'enroll-icontxt enrollmobile-icontxt' : 'enroll-icontxt'}>
            <Icon width={isMobile ? 25 : 28} height={isMobile ? 25 : 28} />
            <label>{Label}</label>
        </div>
    )
}

export default EnrollIconwithLabel