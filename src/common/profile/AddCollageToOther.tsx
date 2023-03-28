import React from 'react'
import DropDown from '../inputfield/DropDown';
import TextField from '../inputfield/TextField';
import '../profile/Profile.scss'

type IconType = (props: any) => JSX.Element;
interface field {
    data: {}[]
    Icon: IconType
}
function AddCollageToOther({ data, Icon }: field) {
    return (
        <>
            <div className='collage-field'>
                {
                    data.map((field: any) => {
                        return (
                            field.isField == 'text' ?
                                <TextField {...field} /> : <DropDown {...field} />
                        )
                    })
                }
            </div>
            <div className='collage-icons'>
                <div className="edit-icn"><Icon width={17} height={16} /></div>
            </div>
        </>
    )
}

export default AddCollageToOther