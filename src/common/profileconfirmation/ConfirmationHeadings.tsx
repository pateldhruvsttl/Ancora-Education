import React from 'react'
import './Confirmation.scss'

interface heading {
  heading: string
}
function ConfirmationHeadings( { heading }: heading) {
  return (
    <div className='confirmation-heading'>
      {heading}
    </div>
  )
}

export default ConfirmationHeadings