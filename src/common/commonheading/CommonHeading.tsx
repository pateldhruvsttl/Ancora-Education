import React from 'react'
import '../profile/ProfileHeading.scss'

interface heading {
    heading: string,
    subDetail: string
}
function CommonHeading({ heading }: any) {

    return (
        <div className='common-heading'>
            <h4>{heading.heading}</h4>
            {heading?.subDetail && <p>{heading.subDetail}</p>}
        </div>
    )
}

export default CommonHeading