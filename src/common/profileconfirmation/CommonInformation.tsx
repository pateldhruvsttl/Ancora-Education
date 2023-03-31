import React from 'react'
import CommonSubInformation from './CommonSubInformation'
import ConfirmationHeadings from './ConfirmationHeadings'
import EditButton from './EditButton'

interface data {
    data: {}[]
    heading: string
}
function CommonInformation({ data, heading }: data) {
    return (
        <>
            <EditButton />
            <ConfirmationHeadings heading={heading} />
            <CommonSubInformation data={data} />
            <div className='profile-hline' />
        </>
    )
}

export default CommonInformation