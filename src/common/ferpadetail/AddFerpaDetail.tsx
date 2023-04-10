import React from 'react'
import Dimention from '../../utils/Dimention'
import './Ferpa.scss'
import FerpaDetaillForOther from './FerpaDetaillForOther'
import FerpaDetaillForTab from './FerpaDetaillForTab'

function AddFerpaDetail() {
    const { width, height } = Dimention()
    return (
        width <= 730 && width >= 481 ?
            <FerpaDetaillForTab fields={fields} />
            :
            <FerpaDetaillForOther fields={fields} />
    )
}

export default AddFerpaDetail
const fields = [
    {
        type: 'text',
        placeholder: 'Testy',
        required: false,
        isField: 'text',
        colSpan: 'col-md-3'
    },
    {
        type: 'text',
        placeholder: 'Mc Tester',
        required: false,
        isField: 'text',
        colSpan: 'col-md-3'
    },
    {
        type: 'text',
        placeholder: '33333333',
        required: false,
        isField: 'text',
        colSpan: 'col-md-3'
    },
    {
        type: 'date',
        placeholder: 'Counselor',
        required: false,
        isField: 'dropDown',
        colSpan: 'col-md-3'
    }
]