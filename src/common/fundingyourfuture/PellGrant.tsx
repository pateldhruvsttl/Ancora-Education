import React from 'react'
import './FundingFuture.scss'

interface props {
    data?: {
        detailOne?: string
        detailTwo?: string
        detailThree?: string
        detailFour?: string
        detailFive?: string
    }
}
function PellGrant({ data }: props) {
    return (
        <div className='pell-grant'>
            <p>{data?.detailOne}</p>
            <p>{data?.detailTwo}</p>
            <p>{data?.detailThree}</p>
            <p>{data?.detailFour}</p>
            <p>{data?.detailFive}</p>
        </div>
    )
}

export default PellGrant