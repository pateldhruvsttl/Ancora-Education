import React from 'react'
import './ProfileHeading.scss'

function ProfileHeading() {
  return (
    <div className='profile-heading'>
      <h1>Contact Information</h1>
      <div className='profile-gline' />
      <p className='profile-content'>
        Please provide your contact information below. When entering your phone number, enter the best number to reach you in the primary phone number field. If you have questions about specific fields, click on the "" for more information.
      </p>
      <div className='profile-hline' />
    </div>
  )
}

export default ProfileHeading