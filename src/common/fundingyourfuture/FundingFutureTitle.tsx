import React from 'react'
import './FundingFuture.scss'

interface props{
    title:string
}
function FundingFutureTitle({title} : props) {
  return (
    <p>{title}</p>
  )
}

export default FundingFutureTitle