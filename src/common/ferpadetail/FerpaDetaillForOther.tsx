import React from 'react'
import DropDown from '../inputfield/DropDown'
import TextField from '../inputfield/TextField'

interface fields {
    fields: {}[]
}
function FerpaDetaillForOther({ fields }: fields) {
    return (
        <div className='add-enrollment'>
            {
                fields.map((field: any) => {
                    return (
                        field.isField == 'text' ?
                            <TextField {...field} /> : <DropDown {...field} />
                    )
                })
            }
        </div>
    )
}

export default FerpaDetaillForOther