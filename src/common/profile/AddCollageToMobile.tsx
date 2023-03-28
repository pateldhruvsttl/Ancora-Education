import React from 'react'
import DropDown from '../inputfield/DropDown';
import TextField from '../inputfield/TextField';
import '../profile/Profile.scss'

type IconType = (props: any) => JSX.Element;
interface field {
    data: {}[]
    Icon: IconType
}
function AddCollageToMobile({ data, Icon }: field) {
    return (
        <>
            <div className='mobile-field-cal'>
                {
                    data.map((field: any) => {
                        return (
                            field.isField !== 'text' &&
                            <>
                                <DropDown {...field} isType={"EduBack"}/>
                                <div className='icon-to-mobile'>
                                    <Icon width={18} height={18} />
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='date-field-mobile'>
                {
                    data.map((field: any) => {
                        return (
                            field.isField == 'text' &&
                            <TextField {...field} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default AddCollageToMobile