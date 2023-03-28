import React from 'react'
import CommonHeading from '../commonheading/CommonHeading'
import DropDown from '../inputfield/DropDown'
import '../profile/Profile.scss'

interface field {
    field: {}[]
    headings: {
        heading: string
    }
}
function GetCommonField({ field, headings }: field) {

    return (
        <>
            <CommonHeading heading={headings} />
            <div className="form-row">
                {
                    field.map((field: any) => {
                        return (<DropDown {...field} />)
                    })
                }
            </div>
            {
                headings.heading !== 'College Information' &&
                <div className='profile-hline line-break' />
            }
        </>
    )
}

export default GetCommonField