import React from 'react'
import DropDown from '../inputfield/DropDown'
import TextField from '../inputfield/TextField'
import '../profile/Profile.scss'
import AddToCollage from './AddToCollage'
import IcnEdit from '../../assets/icons/IcnEdit'

function GetCollage() {
    return (
        <div className='add-collage'>
                <AddToCollage data={addCollageField} Icon={IcnEdit} />
            <div className='add-collage-btn'>
                <button><span>+</span>Add Collage</button>
            </div>
        </div>
    )
}

export default GetCollage
const addCollageField = [
    {
        type: 'text',
        placeholder: 'Yes',
        title: 'Find your college',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-6'
    },
    {
        type: 'date',
        placeholder: 'Yes',
        title: 'College graduation date',
        required: false,
        isField: 'text',
        colSpan: 'col-md-3'
    },
    {
        type: 'date',
        placeholder: 'Yes',
        title: 'Last date attended',
        required: false,
        isField: 'text',
        colSpan: 'col-md-3'
    },
]