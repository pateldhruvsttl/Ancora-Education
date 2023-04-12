import React from 'react'
import './FundingPlan.scss'

type IconType = (props:any) => JSX.Element
interface props {
    academicDetail?: {
        academicYear?: string
        awardYear?: string
    }
    isSpaceDel?:boolean
    Icon:IconType
    isIcon?:boolean
}
function CommonAcademic({ academicDetail,Icon,isSpaceDel,isIcon }: props) {
    return (
        <div className={isSpaceDel ? `common-academic delAcadeSpace` : 'common-academic'}>
            <div className='common-acaleft'>
                <p>{academicDetail?.academicYear}</p>
                <p>{academicDetail?.awardYear}</p>
            </div>
            {isIcon && <Icon width={15} height={15} fill={"#2B4574"} />}
        </div>
    )
}

export default CommonAcademic